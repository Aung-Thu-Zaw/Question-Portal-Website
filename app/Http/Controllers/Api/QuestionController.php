<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\QuestionResource;
use App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        return QuestionResource::collection(Question::orderBy("id", "desc")->paginate(12));
    }

    public function store(Request $request)
    {
        //
    }


    public function show(Question $question)
    {
        return new QuestionResource($question);
    }



    public function update(Request $request, Question $question)
    {
        //
    }


    public function destroy(Question $question)
    {
        //
    }
}
