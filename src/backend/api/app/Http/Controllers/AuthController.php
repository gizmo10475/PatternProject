<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:customers,email'
        ]);

        $user = Customer::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
        ]);

        $token = $user->createToken("pattern", ["customer"])->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json(["data" => $response], 201);
    }
}
