<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStation2cityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('station2city', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("station");
            $table->unsignedBigInteger("city");

            $table->foreign("station")->references("id")->on("stations");
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
        Schema::dropIfExists('station2city');
    }
}
