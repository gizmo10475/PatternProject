<?php

namespace Database\Seeders;

use App\Models\Bike;
use Illuminate\Database\Seeder;

class BikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bikes = Bike::factory()->count(7)->create();
        $bikes[4]->active = true;
        $bikes[6]->active = true;
        $bikes[4]->save();
        $bikes[6]->save();
    }
}
