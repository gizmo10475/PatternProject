<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bike2Station extends Model
{
    use HasFactory;

    protected $table = "bike2station";
    public $timestamps = false;
    protected $fillable = [
        "bike",
        "station"
    ];
}
