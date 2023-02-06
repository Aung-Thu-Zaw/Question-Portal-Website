<?php

use App\Http\Controllers\Api\HomeQuestionController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("/latest-questions", [HomeQuestionController::class,"index"])->name("home");

Route::apiResource("/questions", QuestionController::class);

Route::apiResource("/tags", TagController::class);
