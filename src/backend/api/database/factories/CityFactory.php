<?php

namespace Database\Factories;

use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;

class CityFactory extends Factory
{
    protected $model = City::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => $this->faker->city(),
            "center_long" => $this->faker->longitude(),
            "center_lat" => $this->faker->latitude(),
            "radius" => $this->faker->numberBetween(1, 10)
        ];
    }
}
