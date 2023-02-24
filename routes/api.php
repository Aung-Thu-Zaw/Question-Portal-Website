<?php

use App\Http\Controllers\Api\Auth\UserAuthController;
use App\Http\Controllers\Api\HomeQuestionController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::post("/users/register", [UserAuthController::class,"register"]);
Route::post("/users/login", [UserAuthController::class,"login"]);
Route::post("/users/logout", [UserAuthController::class,"logout"])->middleware("auth:sanctum");





Route::get("/latest-questions", [HomeQuestionController::class,"index"])->name("home");

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResources([
        'questions' => QuestionController::class,
        'tags' => TagController::class,
        'users' => UserController::class,
    ]);
});
