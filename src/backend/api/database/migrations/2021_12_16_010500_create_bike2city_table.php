<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBike2cityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bike2city', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("bike");
            $table->unsignedBigInteger("city");

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
        Schema::dropIfExists('bike2city');
    }
}
