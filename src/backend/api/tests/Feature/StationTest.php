<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\Help;
use Tests\TestCase;

class StationTest extends TestCase
{
    use DatabaseMigrations;
    
    private string $token = "";
    private string $adminToken = "";

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan("db:seed", ["--class" => "StationSeeder"]);
        $this->artisan("db:seed", ["--class" => "CitySeeder"]);
        $this->token = Help::createCustomerAccount("station@customer.test");
        $this->adminToken = Help::createAdminAccount("station@admin.test");
    }

    public function testGetStations()
    {
        $response = $this->withToken($this->token)->get("/api/stations");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data", 10)
                ->has("data.0", fn (AssertableJson $json) =>
                    $json
                        ->whereAllType([
                            "longitude" => "double",
                            "latitude" => "double",
                            "slots" => "integer"
                        ])
                        ->where("id", 1)
                        ->etc()
            )
        );
    }

    public function testCreateStation()
    {
        $response = $this->withToken($this->adminToken)->postJson("/api/stations", [
            "longitude" => 12.24,
            "latitude" => 16.43,
            "city" => 1,
            "slots" => 15
        ]);

        $response->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) =>
            $json
            ->whereAll([
                "data.longitude" => 12.24,
                "data.latitude" => 16.43,
                "data.slots" => 15,
                "data.id" => 11
            ])
        );
    }
}
