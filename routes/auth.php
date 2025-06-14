<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
  Route::get('auth/signin', [AuthenticatedSessionController::class, 'create'])
    ->name('signin.create');

  Route::post('auth/signin', [AuthenticatedSessionController::class, 'store'])->name('signin.store');
});
