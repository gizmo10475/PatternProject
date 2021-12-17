<?php

namespace Database\Seeders;

use App\Models\ParkingZone;
use Illuminate\Database\Seeder;

class ParkingZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ParkingZone::factory(10)->create();
    }
}
