<?php

namespace App\Http\Controllers;

use App\Models\customers;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:customers,email'
        ]);

        $user = customers::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
        ]);

        $token = $user->createToken("pattern")->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json(["data" => $response], 201);
    }
}
