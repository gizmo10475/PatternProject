<?php

use Illuminate\Database\Eloquent\Model;

class ParkingZone2City extends Model
{
    protected $table = "parking_zone2city";
    public $timestamps = false;
    protected $fillable = [
        "zone",
        "city"
    ];
}
