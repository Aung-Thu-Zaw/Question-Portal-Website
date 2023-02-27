<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AnswerRequest;
use App\Http\Resources\AnswerResource;
use App\Models\Answer;

class AnswerController extends Controller
{
    public function store(AnswerRequest $request)
    {
        $answer=Answer::create($request->validated());
        return new AnswerResource($answer);
    }
}
