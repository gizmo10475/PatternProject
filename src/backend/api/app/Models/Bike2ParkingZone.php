<?php

use Illuminate\Database\Eloquent\Model;

class Bike2ParkingZone extends Model
{
    protected $table = "bike2parking_zone";
    public $timestamps = false;
    protected $fillable = [
        "zone",
        "bike"
    ];
}
