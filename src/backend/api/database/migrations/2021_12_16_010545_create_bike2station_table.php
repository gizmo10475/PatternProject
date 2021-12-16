<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBike2stationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bike2station', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("bike");
            $table->unsignedBigInteger("station");

            $table->foreign("bike")->references("id")->on("bikes");
            $table->foreign("station")->references("id")->on("stations");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bike2station');
    }
}
