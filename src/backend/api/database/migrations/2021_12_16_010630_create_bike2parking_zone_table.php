<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBike2parkingZoneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bike2parking_zone', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("bike");
            $table->unsignedBigInteger("zone");

            $table->foreign("bike")->references("id")->on("bikes");
            $table->foreign("zone")->references("id")->on("parking_zones");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bike2parking_zone');
    }
}
