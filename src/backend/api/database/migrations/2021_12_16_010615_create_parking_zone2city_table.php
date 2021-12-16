<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParkingZone2cityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parking_zone2city', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("zone");
            $table->unsignedBigInteger("city");

            $table->foreign("zone")->references("id")->on("parking_zones");
            $table->foreign("city")->references("id")->on("cities");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parking_zone2city');
    }
}
