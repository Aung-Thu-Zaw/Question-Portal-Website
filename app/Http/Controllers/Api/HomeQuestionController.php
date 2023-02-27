<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\QuestionResource;
use App\Models\Question;

class HomeQuestionController extends Controller
{
    public function index()
    {
        return QuestionResource::collection(Question::orderBy("id", "desc")->take(20)->get());
    }
}
