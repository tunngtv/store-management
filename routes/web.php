<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main\IndexController;

Route::middleware('auth')->group(function () {
    Route::get('/', [IndexController::class, 'index'])->name('home');
});


require __DIR__ . '/auth.php';
