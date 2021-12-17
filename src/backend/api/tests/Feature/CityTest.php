<?php

namespace Tests\Feature;

use App\Models\Bike;
use App\Models\Bike2City;
use App\Models\City;
use App\Models\ParkingZone2City;
use App\Models\Station2City;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\Help;
use Tests\TestCase;

class CityTest extends TestCase
{
    use DatabaseMigrations;

    private string $token = "";
    private string $adminToken = "";

    public function setUp(): void
    {
        parent::setUp();
        $this->token = Help::createCustomerAccount("city@test.test");
        $this->adminToken = Help::createAdminAccount("admin@city.test");

        $this->artisan("db:seed", ["--class" => "CitySeeder"]);
    }

    public function testGetCities()
    {
        $response = $this->withToken($this->token)->get("/api/city");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data", 10, function (AssertableJson $json) {
                    return $json
                        ->whereAllType([
                            "name" => "string",
                            "center_long" => "double",
                            "center_lat" => "double",
                            "radius" => "integer"
                        ])
                        ->where("id", 1)
                        ->etc();
                })
        );
    }

    public function testCreateCity()
    {
        $response = $this->withToken($this->adminToken)->postJson("/api/city", [
            "name" => "Karlskrona"
        ]);

        $response->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.id" => 11,
                    "data.name" => "Karlskrona"
                ])
                ->etc()
        );
    }

    public function testGetBikes()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
        Bike2City::create([
            "bike" => 3,
            "city" => 2,
        ]);
        Bike2City::create([
            "bike" => 6,
            "city" => 2
        ]);
        Bike2City::create([
            "bike" => 5,
            "city" => 3
        ]);

        $response = $this->withToken($this->token)->get("/api/city/2/bikes");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data.bikes", 2, function (AssertableJson $json) {
                    return $json
                        ->whereAll([
                            "id" => 3,
                            "active" => 0,
                            "charging" => 0,
                            "warning" => 0,
                            "speed" => 0
                        ])
                        ->whereAllType([
                            "latitude" => "double",
                            "longitude" => "double"
                        ])->etc();
                })
                ->whereType("data.name", "string")
                ->where("data.id", 2)
                ->etc()
        );
    }

    public function testGetActiveBikes()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
        Bike2City::create([
            "bike" => 3,
            "city" => 2,
        ]);
        Bike2City::create([
            "bike" => 6,
            "city" => 2
        ]);
        $anActiveBike = Bike::find(6);
        $anActiveBike->active = true;
        $anActiveBike->save();

        $response = $this->withToken($this->token)->get("/api/city/2/bikes?active=true");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data.bikes", 1, function (AssertableJson $json) {
                    return $json
                    ->whereAll([
                        "id" => 6,
                        "active" => 1,
                        "speed" => 0,
                        "warning" => 0,
                        "charging" => 0
                    ])
                    ->whereAllType([
                        "latitude" => "double",
                        "longitude" => "double"
                    ])->etc();
                })
        );
    }

    public function testGetStations()
    {
        $this->artisan("db:seed", ["--class" => "StationSeeder"]);
        Station2City::create([
            "station" => 5,
            "city" => 3
        ]);
        Station2City::create([
            "station" => 2,
            "city" => 3
        ]);
        Station2City::create([
            "station" => 7,
            "city" => 2
        ]);

        $response = $this->withToken($this->token)->get("/api/city/3/stations");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->has("data.stations", 2, function (AssertableJson $json) {
                    return $json
                    ->where("id", 5)
                    ->whereAllType([
                        "longitude" => "double",
                        "latitude" => "double",
                        "slots" => "integer",
                        "available" => "integer"
                    ])->etc();
                })
                ->where("data.id", 3)
        );
    }

    public function testGetParkingZones()
    {
        $this->artisan("db:seed", ["--class" => "ParkingZoneSeeder"]);
        ParkingZone2City::create([
            "zone" => 2,
            "city" => 4
        ]);
        ParkingZone2City::create([
            "zone" => 5,
            "city" => 2
        ]);

        $response = $this->withToken($this->token)->get("/api/city/2/parking");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->has("data.parking_zones", 1, function (AssertableJson $json) {
                    return $json
                    ->where("id", 5)
                    ->whereAllType([
                        "center_long" => "double",
                        "center_lat" => "double",
                        "radius" => "integer"
                    ])->etc();
                })
                ->where("data.id", 2)
        );
    }

    public function testAddBikeToCity()
    {
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);

        $response = $this->withToken($this->adminToken)->postJson("/api/city/3/bikes", ["bike" => 2]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
            $json
            ->has("data.bike")
            ->has("data.city")
            ->whereAll([
                "data.bike.id" => 2,
                "data.city.id" => 3
            ])
            ->etc()
        );
    }

    public function testGetCity()
    {
        $response = $this->withToken($this->token)->get("/api/city/7");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->where("data.id", 7)
                ->whereAllType([
                    "data.name" => "string",
                    "data.center_long" => "double",
                    "data.center_lat" => "double",
                    "data.radius" => "integer"
                ])
                ->etc()
        );
    }

    public function testUpdateCity()
    {
        $response = $this->withToken($this->adminToken)->putJson("/api/city/7", [
            "name" => "Testernas Stad"
        ]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.id" => 7,
                    "data.name" => "Testernas Stad"
                ])
        );
    }

    public function testDeleteCity()
    {
        $response = $this->withToken($this->adminToken)->delete("/api/city/7");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->where("data", 1)
        );

        $this->expectException(ModelNotFoundException::class);
        City::findOrFail(7);
    }
}
