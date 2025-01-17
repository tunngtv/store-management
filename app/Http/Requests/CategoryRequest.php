<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CategoryRequest extends FormRequest
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
        return [
            'name' => 'required|string|unique:categories',
            'slug' => 'required|string|unique:categories',
        ];
    }

    /**
     * Get the error messages for the defined validation rules
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The category name is required',
            'slug.required' => 'The slug is required',
        ];
    }

    /**
     * Create an error message summary from the validation errors.
     *
     * @param Validator $validator
     * @return string
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

            $message .= ' ' . trans_choice("(and :count more $pluralized)", $count, ['count' => $count]);
        }

        return $message;
    }

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
