<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\AuthController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::middleware([
        'middleware' => 'api',
        'prefix' => 'auth'
    ])->group(function () {
        // Post
        Route::apiResource('posts', PostController::class);

        // Authenticate
        Route::get("profile", [AuthController::class, "profile"]);
        Route::get("refresh-token", [AuthController::class, "refreshToken"]);
        Route::post('logout', [AuthController::class, 'logout']);
    });

    Route::post('login', [AuthController::class, 'login'])->name('login');
});
