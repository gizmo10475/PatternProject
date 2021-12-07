<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    protected $table = 'stations';

    public $timestamps = false;

    protected $fillable = [
        'slots',
        'longitude',
        'latitude'
    ];

    public static function calculateAvailableSlots(Collection $stations): Collection
    {
        foreach ($stations as $station) {
            $bikesAtStation = Bike2Station::query()->get()->where("station", "=", $station->id);
            $station->available = $station->slots - $bikesAtStation->count();
        }

        return $stations;
    }
}
