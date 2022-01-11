<?php

namespace Database\Factories;

use App\Models\Bike;
use Illuminate\Database\Eloquent\Factories\Factory;

class BikeFactory extends Factory
{
    protected $model = Bike::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "longitude" => $this->faker->longitude(),
            "latitude" => $this->faker->latitude()
        ];
    }
}
