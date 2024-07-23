<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;


Route::prefix('v1')->group(function () {
    Route::middleware([
        'middleware' => 'api',
        'prefix' => 'auth'
    ])->group(function () {
        // Post
        Route::apiResource('posts', PostController::class);

        // Category
        Route::apiResource('category', CategoryController::class);

        // Authenticate
        Route::get("profile", [AuthController::class, "profile"]);
        Route::get("refresh-token", [AuthController::class, "refreshToken"]);
        Route::post('logout', [AuthController::class, 'logout']);
    });

    Route::post('login', [AuthController::class, 'login'])->name('login');
});
