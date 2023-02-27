<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        if (request("filter")=="newest") {
            $questions=Question::with("tags", "answers")->orderBy("id", "desc")->paginate(12);
        } elseif (request("filter")=="oldest") {
            $questions=Question::with("tags", "answers")->orderBy("id", "asc")->paginate(12);
        } elseif (request("filter")=="interesting") {
            $questions=Question::with("tags", "answers")->orderBy("view", "desc")->paginate(12);
        } elseif (request("filter")=="week") {
            $questions=Question::with("tags", "answers")->whereBetween('created_at', [now()->subWeek(), now()])->orderBy("id", "desc")->paginate(12);
        } elseif (request("filter")=="month") {
            $questions=Question::whereBetween('created_at', [now()->subMonth(), now()])->orderBy("id", "desc")->paginate(12);
        }
        return QuestionResource::collection($questions);
    }

    public function store(QuestionRequest $request)
    {
        $question=Question::create($request->validated());
        return new QuestionResource($question);
    }


    public function show(Question $question)
    {
        $question->increment("view");
        $question->update();
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
