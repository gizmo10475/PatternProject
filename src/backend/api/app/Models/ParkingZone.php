<?php

use Illuminate\Database\Eloquent\Model;

class ParkingZone extends Model
{
    protected $table = "parking_zones";
    public $timestamps = false;
    protected $fillable = [
        "center_long",
        "center_lat",
        "radius"
    ];
}
