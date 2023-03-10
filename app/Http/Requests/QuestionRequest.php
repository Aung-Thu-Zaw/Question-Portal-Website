<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class QuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "user_id"=>["required","numeric",Rule::exists("users", "id")],
            "question"=>["required","min:10","max:150"],
            "problem_detail"=>["required","min:20"],
            "expect_answer"=>["required","min:20"],
        ];
    }
}
