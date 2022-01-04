<?php

namespace Tests\Feature;

use App\Models\Bike2ParkingZone;
use App\Models\ParkingZone2City;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\Help;
use Tests\TestCase;

class ParkingZoneTest extends TestCase
{
    use DatabaseMigrations;

    private string $token = "";
    private string $adminToken = "";

    public function setUp(): void
    {
        parent::setUp();
        $this->token = Help::createCustomerAccount("parking@test.test");
        $this->adminToken = Help::createAdminAccount("parking@admin.test");

        $this->artisan("db:seed", ["--class" => "ParkingZoneSeeder"]);
    }

    public function testGetParkingZones()
    {
        $response = $this->withToken($this->token)->get("/api/parking");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data", 10, function (AssertableJson $json) {
                    return $json
                    ->where("id", 1)
                    ->whereAllType([
                        "center_long" => "double",
                        "center_lat" => "double",
                        "radius" => "integer"
                    ])->etc();
                })->etc()
        );
    }

    public function testGetParkingZoneBikes()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
        Bike2ParkingZone::create([
            "bike" => 4,
            "zone" => 1
        ]);
        Bike2ParkingZone::create([
            "bike" => 2,
            "zone" => 1
        ]);

        $response = $this->withToken($this->adminToken)->get("/api/parking/1/bikes");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data.zone.bikes", 2, function (AssertableJson $json) {
                    return $json
                    ->where("id", 4)
                    ->etc();
                })
                ->where("data.zone.id", 1)
                ->etc()
        );
    }

    public function testCreateParkingZone()
    {
        $response = $this->withToken($this->adminToken)->postJson("/api/parking", [
            "longitude" => 12.4,
            "latitude" => 65.4,
            "radius" => 4
        ]);

        $response->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) =>
                $json->whereAll([
                    "data.center_long" => 12.4,
                    "data.center_lat" => 65.4,
                    "data.radius" => 4,
                    "data.id" => 11
                ])
        );
    }

    public function testCreateParkingZoneWithCity()
    {
        $this->artisan("db:seed", ["--class" => "CitySeeder"]);

        $response = $this->withToken($this->adminToken)->postJson("/api/parking", [
            "longitude" => 1.3,
            "latitude" => 43.5,
            "radius" => 3,
            "city" => 5
        ]);

        $response->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.center_long" => 1.3,
                    "data.center_lat" => 43.5,
                    "data.radius" => 3,
                    "data.id" => 11
                ])
        );

        try {
            $cityConn = ParkingZone2City::findOrFail(1);
        } catch (ModelNotFoundException $e) {
            $this->fail($e->getMessage());
        }

        $this->assertEquals(5, $cityConn->city);
        $this->assertEquals(11, $cityConn->zone);
    }

    public function testParkBike()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);

        $response = $this->withToken($this->token)->postJson("/api/parking/bike", [
            "bike" => 3,
            "zone" => 4
        ]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.bike.id" => 3,
                    "data.zone.id" => 4
                ])->etc()
        );
    }

    public function testUnparkBike()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
        Bike2ParkingZone::create([
            "bike" => 4,
            "zone" => 2
        ]);

        $response = $this->withToken($this->token)->deleteJson("/api/parking/bike", ["bike" => 4]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->where("data", 1)
        );
        
        $this->expectException(ModelNotFoundException::class);
        Bike2ParkingZone::findOrFail(1);
    }
}
