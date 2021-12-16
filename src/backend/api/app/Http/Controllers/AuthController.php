<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Account;
use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string'
        ]);

        $account = null;

        try {
            $account = Account::create([
                "email" => $fields["email"]
            ]);
        } catch (QueryException) {
            // ??? Varför måste jag göra så här
            $account = Account::query()->select(["*"])->where("email", "=", $fields["email"])->get()->first();
            $id = $account->id;
            $customer = Account::find($id)->customer;
            $token = $account->token;
            return response()->json(["data" => [
                "user" => [
                        "email" => $account->email,
                        "name" => $customer->name,
                        "id" => $customer->id
                    ],
                    "token" => $token->token
                ]
            ], 200);
        }
        $user = Customer::create([
            "name" => $fields["name"],
            "account" => $account->id
        ]);

        $token = $account->createToken("customer", ["customer"])->plainTextToken;
        $response = [
            'user' => [
                "name" => $user->name,
                "email" => $account->email,
                "id" => $user->id
            ],
            'token' => $token
        ];

        return response()->json(["data" => $response], 201);
    }
}
