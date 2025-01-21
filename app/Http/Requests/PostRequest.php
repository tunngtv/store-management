<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use App\Http\Requests\BaseRequest;

class PostRequest extends BaseRequest
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
            'title' => 'required',
            'content' => 'required',
            'author_id' => ['required', 'exists:users,id'],
            'category_id' => ['required', 'exists:categories,id'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'The title is required',
            'content.required' => 'The content is required',
            'author_id.required' => 'The author is required',
            'author_id.exists' => 'The author doest not exist',
            'category_id.required' => 'The category is required',
            'category_id.exists' => 'The category doest not exist',
        ];
    }
}
