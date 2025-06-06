<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;
use Inertia\Response;


class AuthenticatedSessionController extends Controller
{
  /**
   * Display the login view.
   */
  public function create(): Response
  {
    return Inertia::render('Auth/SignIn', [
      // 'canResetPassword' => Route::has('password.request'),
      // 'canRegister' => Route::has('register'),
      // 'status' => session('status'),
    ]);
  }
}
