<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class BaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [];
    }

    /**
     * Summarizes the validation errors from the given Validator instance.
     *
     * This method retrieves all error messages from the Validator, and constructs
     * a summary message. If there are no error messages or the first message is not
     * a string, it returns a default invalid data message. Otherwise, it returns
     * the first error message, and if there are additional error messages, it appends
     * a count of the remaining errors.
     *
     * @param Validator $validator The Validator instance containing the validation errors.
     * @return string A summary of the validation errors.
     */
    protected static function summarize(Validator $validator): string
    {
        $messages = $validator->errors()->all();

        if (!count($messages) || !is_string($messages[0])) {
            return trans('The given data was invalid.');
        }

        $message = array_shift($messages);

        if ($count = count($messages)) {
            $pluralized = $count === 1 ? 'error' : 'errors';

            $message .= ' ' . trans_choice("(and :count more $pluralized)", $count, compact('count'));
        }

        return $message;
    }

    /**
     * Handle a failed validation attempt.
     *
     * This method is called when validation fails. If the request expects a JSON response,
     * it will return a JSON response with the validation errors and a 422 status code.
     * Otherwise, it will call the parent method to handle the failed validation.
     *
     * @param \Illuminate\Contracts\Validation\Validator $validator The validator instance.
     *
     * @throws \Illuminate\Http\Exceptions\HttpResponseException If the request expects a JSON response.
     */
    protected function failedValidation(Validator $validator): void
    {
        if ($this->expectsJson()) {
            $response = response()->json([
                'status' => false,
                'message' => $this->summarize($validator),
                'errors' => $validator->errors()
            ], 422);

            throw new HttpResponseException($response);
        }

        parent::failedValidation($validator);
    }
}
