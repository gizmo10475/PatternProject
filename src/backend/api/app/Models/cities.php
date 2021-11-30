<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class cities extends Model
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
        return $this->hasManyThrough(bikes::class, Bike2City::class, "city", "id");
    }
}
