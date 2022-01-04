<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use DatabaseMigrations;

    public function testRegister()
    {
        $response = $this->postJson("/api/register", [
            "name" => "Testing Person",
            "email" => "test@tester.test"
        ]);

        $response
            ->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) => 
                $json->hasAll([
                    "data.token",
                    "data.user",
                    "data.user.name",
                    "data.user.email",
                    "data.user.id"
                ])
                ->missing("data.user.credits")
                ->where("data.user.name", "Testing Person")
                ->where("data.user.email", "test@tester.test")
                ->where("data.user.id", 1)
                ->whereType("data.token", "string")
                ->etc()
            );
    }

    public function testRegisterDuplicate()
    {
        $response = $this->postJson("/api/register", [
            "name" => "Testing Person",
            "email" => "test@tester.test"
        ]);

        $response->assertStatus(201);
        $response = $this->postJson("/api/register", [
            "name" => "Testing Person",
            "email" => "test@tester.test"
        ]);
        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->hasAll([
                    "data.user",
                    "data.user.id",
                    "data.user.name",
                    "data.user.email",
                    "data.token"
                ])
                ->whereAll([
                    "data.user.id" => 1,
                    "data.user.name" => "Testing Person",
                    "data.user.email" => "test@tester.test"
                ])
                ->whereType("data.token", "string")
            );
    }
}
