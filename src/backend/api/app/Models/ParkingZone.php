<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class ParkingZone extends Model
{
    use HasFactory;

    protected $table = "parking_zones";
    public $timestamps = false;
    protected $fillable = [
        "center_long",
        "center_lat",
        "radius"
    ];

    public function bikes(): HasManyThrough
    {
        return $this->hasManyThrough(Bike::class, Bike2ParkingZone::class, "zone", "id", "id", "bike");
    }
}
