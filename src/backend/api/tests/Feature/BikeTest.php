<?php

namespace Tests\Feature;

use App\Models\Bike;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\Help;
use Tests\TestCase;

class BikeTest extends TestCase
{
    use DatabaseMigrations;

    private string $token = "";
    private string $adminToken = "";

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan("db:seed", ["--class" => "BikeSeeder"]);
        $this->token = Help::createCustomerAccount("bike@customer.test");
        $this->adminToken = Help::createAdminAccount("bikeadmin@admin.test");
    }

    public function testAllBikes()
    {
        $response = $this->withToken($this->token)->get("/api/bike");

        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->has("data", 7)
                ->has("data.0", fn (AssertableJson $json) =>
                    $json
                    ->whereType("longitude", "double")
                    ->whereType("latitude", "double")
                    ->whereAll([
                        "id" => 1,
                        "charging" => 0,
                        "warning" => 0,
                        "speed" => 0,
                        "active" => 0
                    ])
                    ->etc()
                )
        );
    }

    public function testInactiveBikes()
    {
        $response = $this->withToken($this->token)->get("/api/bike?inactive=true");

        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json->has("data", 5, function (AssertableJson $json) {
                    return $json
                    ->whereType("longitude", "double")
                    ->whereType("latitude", "double")
                    ->whereAll([
                        "id" => 1,
                        "charging" => 0,
                        "warning" => 0,
                        "speed" => 0,
                        "active" => 0
                    ]);
                })
                ->etc()
        );
    }

    public function testActiveBikes()
    {
        $response = $this->withToken($this->token)->get("/api/bike?active=true");

        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) => 
                $json
                ->has("data", 2, function (AssertableJson $json) {
                    return $json
                        ->whereAllType([
                            "longitude" => "double",
                            "latitude" => "double"
                        ])
                        ->whereAll([
                            "id" => 5,
                            "charging" => 0,
                            "warning" => 0,
                            "speed" => 0,
                            "active" => 1
                        ]);
                })
                ->etc()
            );
    }

    public function testCreateBike()
    {
        $response = $this->withToken($this->adminToken)->postJson("/api/bike", [
            "longitude" => 12.345,
            "latitude" => 67.890
        ]);

        $response
            ->assertStatus(201)
            ->assertJson(fn (AssertableJson $json) => 
                $json->whereAll([
                    "data.id" => 8,
                    "data.longitude" => 12.345,
                    "data.latitude" => 67.890,
                ])
        );
    }

    public function testUpdateBike()
    {
        $response = $this->withToken($this->token)->putJson("/api/bike/1", [
            "longitude" => 15.3456,
            "latitude" => 74.234,
            "active" => 1
        ]);
        $bike = Bike::find(1);
        
        $response
            ->assertStatus(200)
            ->assertJson(fn (AssertableJson $json) =>
                $json
                ->whereAll([
                    "data.id" => 1,
                    "data.longitude" => 15.3456,
                    "data.latitude" => 74.234,
                    "data.active" => 1
                ])
        );

        $this->assertEquals(15.3456, $bike->longitude);
        $this->assertEquals(74.234, $bike->latitude);
        $this->assertTrue(boolval($bike->active));
    }

    public function testDeleteBike()
    {
        $response = $this->withToken($this->adminToken)->delete("/api/bike/1");

        $response->assertStatus(200);
        $this->expectException(ModelNotFoundException::class);
        Bike::findOrFail(1);
    }
}
