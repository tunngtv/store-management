<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     *
     * Register a user
     *
     * @return JsonResponse
     */
    public function register(): JsonResponse
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = new User;
        $user->name = request('name');
        $user->email = request('email');
        $user->password = bcrypt(request('password'));
        $user->save();

        return response()->json($user, 201);
    }

    // Login API - POST (email, password)
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');
        $token = Auth::guard('api')->attempt($credentials);

        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        // $userData = auth()->user();

        return $this->respondWithToken($token);
    }

    // Profile API - GET (JWT Auth Token)
    public function profile(): JsonResponse
    {
        $userData = auth()->user();

        return response()->json([
            "status" => true,
            "message" => "Profile data",
            "user" => $userData,
        ]);
    }

    // Refresh Token API - GET (JWT Auth Token)
    public function refreshToken(): JsonResponse
    {
        $token = JWTAuth::getToken();
        $newToken = JWTAuth::refresh($token);
        return $this->respondWithToken($newToken);
    }

    // Logout API - POST (JWT Auth Token)
    public function logout(): JsonResponse
    {
        Auth::guard('api')->logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     * @param null $user
     * @return JsonResponse
     */
    protected function respondWithToken(string $token, $user = null): JsonResponse
    {
        $response = [
            'status' => 'success',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60
        ];

        if ($user) {
            $response['user'] = $user;
        }

        return response()->json($response);
    }
}
