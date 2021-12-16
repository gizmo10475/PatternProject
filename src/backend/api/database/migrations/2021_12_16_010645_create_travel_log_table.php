<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTravelLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('travel_log', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("customer");
            $table->unsignedBigInteger("bike");
            $table->double("start_longitude");
            $table->double("start_latitude");
            $table->timestamp("start_time");
            $table->double("end_longitude");
            $table->double("end_latitude");
            $table->timestamp("end_time")->useCurrent();
            $table->float("cost");
            $table->unsignedBigInteger("city");

            $table->foreign("customer")->references("id")->on("customers");
            $table->foreign("bike")->references("id")->on("bikes");
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
        Schema::dropIfExists('travel_log');
    }
}
