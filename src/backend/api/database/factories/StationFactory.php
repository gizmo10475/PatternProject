<?php

namespace Database\Factories;

use App\Models\Station;
use Illuminate\Database\Eloquent\Factories\Factory;

class StationFactory extends Factory
{
    protected $model = Station::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "slots" => $this->faker->numberBetween(10, 100),
            "longitude" => $this->faker->longitude(),
            "latitude" => $this->faker->latitude()
        ];
    }
}
