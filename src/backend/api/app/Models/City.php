<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class City extends Model
{
    use HasFactory;

    protected $table = 'cities';

    public $timestamps = false;

    protected $primaryKey = "id";
    protected $fillable = [
        'name'
    ];

    public function bikes(): HasManyThrough
    {
        return $this->hasManyThrough(Bike::class, Bike2City::class, "city", "id");
    }

    public function stations(): HasManyThrough
    {
        return $this->hasManyThrough(Station::class, Station2City::class, "city", "id");
    }
}
