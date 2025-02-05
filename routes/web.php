<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main\IndexController;

Route::controller(IndexController::class)->group(function () {
    Route::get('/', 'index');
});