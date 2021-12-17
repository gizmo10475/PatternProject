<?php

namespace Database\Factories;

use App\Models\ParkingZone;
use Illuminate\Database\Eloquent\Factories\Factory;

class ParkingZoneFactory extends Factory
{
    protected $model = ParkingZone::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "center_long" => $this->faker->longitude(),
            "center_lat" => $this->faker->latitude(),
            "radius" => $this->faker->numberBetween(1, 50)
        ];
    }
}
