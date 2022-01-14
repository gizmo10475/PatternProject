<?php

namespace Tests\Feature;

use App\Models\Bike;
use App\Models\Bike2Station;
use App\Models\Station;
use App\Models\Station2City;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
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

        try {
            $cityConnection = Station2City::findOrFail(1);
        } catch (ModelNotFoundException $e) {
            $this->fail($e->getMessage());
        }

        $this->assertEquals(1, $cityConnection->city);
        $this->assertEquals(11, $cityConnection->station);
    }

    public function testGetStation()
    {
        $response = $this->withToken($this->token)->get("/api/stations/1");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->where("data.id", 1)
                ->whereAllType([
                    "data.longitude" => "double",
                    "data.latitude" => "double",
                    "data.slots" => "integer"
                ])
        );
    }

    public function testUpdateStation()
    {
        $response = $this->withToken($this->adminToken)->putJson("/api/stations/1", [
            "slots" => 116
        ]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->where("data.slots", 116)
        );
        try {
            $station = Station::findOrFail(1);
        } catch (ModelNotFoundException $e) {
            $this->fail($e->getMessage());
        }

        $this->assertEquals($station->slots, 116);
    }

    public function testDeleteStation()
    {
        $response = $this->withToken($this->adminToken)->delete("/api/stations/8");

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->where("data", 1)
        );

        $this->expectException(ModelNotFoundException::class);
        Station::findOrFail(8);
    }

    public function testMoveBike()
    {
        $response = $this->withToken($this->adminToken)->postJson("/api/stations/moveBike", [
            "station" => 2,
            "bike" => 4
        ]);

        $response->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->where("data", "Bike moved")
        );

        try {
            Bike2Station::findOrFail(1);
            $station = Station::findOrFail(2);
            $bike = Bike::findOrFail(4);
        } catch (ModelNotFoundException $e) {
            $this->fail($e->getMessage());
        }

        $this->assertEquals($bike->longitude, $station->longitude);
        $this->assertEquals($bike->latitude, $station->latitude);
    }
}
