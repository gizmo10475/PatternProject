<?php

namespace Tests\Feature;

use App\Models\Customer;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\Help;
use Tests\TestCase;

class CustomerTest extends TestCase
{
    use DatabaseMigrations;

    private string $token = "";
    private string $notMyToken = "";
    private string $adminToken = "";

    public function setUp(): void
    {
        parent::setUp();

        $this->token = Help::createCustomerAccount("customer@test.test", "Testing Person");
        $this->notMyToken = Help::createCustomerAccount("customer2@test.test");
        $this->adminToken = Help::createAdminAccount("admin@customer.test");
    }

    public function testGetCustomers()
    {
        $response = $this->withToken($this->adminToken)->get("/api/customer");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data", 2, function (AssertableJson $json) {
                    return $json
                        ->whereAll([
                            "id" => 1,
                            "name" => "Testing Person",
                            "email" => "customer@test.test",
                            "credits" => 0
                        ]);
                })
        );
    }

    public function testGetMyData()
    {
        $response = $this->withToken($this->token)->get("/api/perm_demo/customer/1");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.id" => 1,
                    "data.name" => "Testing Person",
                    "data.email" => "customer@test.test",
                    "data.credits" => 0
                ])
        );
    }

    public function testGetSomeoneElsesData()
    {
        $response = $this->withToken($this->notMyToken)->get("/api/perm_demo/customer/1");
        $response->assertStatus(403);
    }

    public function testGetUpdateCustomer()
    {
        $response = $this->withToken($this->token)->putJson("/api/perm_demo/customer/1", [
            "credits" => 140
        ]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->whereAll([
                    "data.id" => 1,
                    "data.credits" => 140
                ])
        );

        try {
            $customer = Customer::findOrFail(1);
        } catch (ModelNotFoundException $e) {
            $this->fail($e->getMessage());
        } 

        $this->assertEquals(140, $customer->credits);
    }

    public function testCreateHistoryGetHistory()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
        $this->artisan("db:seed", ["--class" => "CitySeeder"]);
        $response = $this->withToken($this->token)->postJson("/api/perm_demo/customer/1/history", [
            "city" => 3,
            "customer" => 1,
            "bike" => 5,
            "start_longitude" => 12.45,
            "start_latitude" => 16.54,
            "start_time" => "2021-12-17 12:34:44",
            "end_longitude" => 16.54,
            "end_latitude" => 12.45,
            "cost" => 12
        ]);

        $response->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.city" => 3,
                    "data.customer" => 1,
                    "data.bike" => 5,
                    "data.start_longitude" => 12.45,
                    "data.start_latitude" => 16.54,
                    "data.end_longitude" => 16.54,
                    "data.end_latitude" => 12.45,
                    "data.cost" => 12
                ])
                ->has("data.start_time")
                ->etc()
        );

        $response = $this->withToken($this->token)->get("/api/perm_demo/customer/1/history");
        
        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data", 1, function (AssertableJson $json) {
                    return $json
                    ->whereAll([
                        "id" => 1,
                        "city" => 3,
                        "customer" => 1,
                        "bike" => 5,
                        "start_longitude" => 12.45,
                        "start_latitude" => 16.54,
                        "end_longitude" => 16.54,
                        "end_latitude" => 12.45,
                        "cost" => 12
                    ])
                    ->hasAll([
                        "start_time",
                        "end_time"
                    ]);
                })
        );
    }

    public function testDeleteCustomer() {
        $response = $this->withToken($this->adminToken)->delete("/api/perm_demo/customer/2");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->where("data", 1)
        );

        $this->expectException(ModelNotFoundException::class);
        Customer::findOrFail(2);
    }
}
