<?php

use App\Http\Controllers\Api\AnswerController;
use App\Http\Controllers\Api\Auth\UserAuthController;
use App\Http\Controllers\Api\HomeQuestionController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

// User Authentication
Route::post("/users/register", [UserAuthController::class,"register"]);
Route::post("/users/login", [UserAuthController::class,"login"]);

// Home
Route::get("/latest-questions", [HomeQuestionController::class,"index"]);

// Question Section
Route::get("/questions", [QuestionController::class,"index"]);
Route::get("/questions/{question}", [QuestionController::class,"show"]);

// Answer Section
Route::get("/answers/{question_id}", [AnswerController::class,"index"]);

// Tag Section
Route::get("/tags", [TagController::class,"index"]);

// User Section
Route::get("/users", [UserController::class,"index"]);
Route::get("/users/{user}", [UserController::class,"show"]);

// Sections with middleware
Route::middleware("auth:sanctum")->group(function () {
    Route::post("questions", [QuestionController::class,"store"]);
    Route::post("answers", [AnswerController::class,"store"]);
    Route::post("/users/logout", [UserAuthController::class,"logout"]);
});






// Route::apiResources([
//     'questions' => QuestionController::class,
//     'answers'=>AnswerController::class,
//     'tags' => TagController::class,
//     'users' => UserController::class,
// ]);
