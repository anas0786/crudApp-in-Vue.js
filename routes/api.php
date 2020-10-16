<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

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


             
     
//Auth Route
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::post('me', [AuthController::class, 'me']);

//post route
Route::middleware(['CheckToken'])->group(function () {
    Route::post('store', [PostController::class, 'store']);
    Route::get('posts', [PostController::class, 'index']);
    Route::get('postview/{id}', [PostController::class, 'show']);
    Route::post('update/{id}', [PostController::class, 'update']);
    Route::get('delete/{id}', [PostController::class, 'destroy']);
});

