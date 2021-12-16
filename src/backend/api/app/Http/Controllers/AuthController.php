<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:accounts,email'
        ]);

        $account = Account::create([
            "email" => $fields["email"]
        ]);
        $user = Customer::create([
            "name" => $fields["name"],
            "account" => $account->id
        ]);

        $token = $account->createToken("customer", ["customer"])->plainTextToken;
        $response = [
            'user' => [
                "name" => $user->name,
                "email" => $account->email,
                "credits" => $user->credits
            ],
            'token' => $token
        ];

        return response()->json(["data" => $response], 201);
    }
}
