<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckSessionTimeout
{
  public function handle(Request $request, Closure $next): Response
  {
    if (Auth::check()) {
      $lastActivity = session('last_activity');
      $timeout = config('session.lifetime') * 60;

      if ($lastActivity && (time() - $lastActivity > $timeout)) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        if ($request->expectsJson() || $request->is('api/*')) {
          return response()->json(['message' => 'Session expired'], 419);
        }

        return redirect()->route('signin.create')->with('status', 'Session expired. Please log in again.');
      }

      session(['last_activity' => time()]);
    }

    return $next($request);
  }
}
