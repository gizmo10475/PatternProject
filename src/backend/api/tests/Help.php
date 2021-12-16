<?php

namespace Tests;

use App\Models\Account;
use App\Models\Customer;

class Help
{
    public static function createCustomerAccount(string $email): string
    {
        $account = Account::create([
            "email" => $email
        ]);
        
        Customer::create([
            "name" => "Tester McTests",
            "account" => $account->id
        ]);
        
        return $account->createToken("customer", ["customer"])->plainTextToken;
    }

    public static function createAdminAccount(string $email): string
    {
        $account = Account::create([
            "email" => $email,
            "admin" => true
        ]);

        return $account->createToken("administrator", ["admin"])->plainTextToken;
    }
}
