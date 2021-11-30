<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Bike2City extends Model
{
    use HasFactory;

    protected $table = "bike2city";
    public $timestamps = false;
    protected $fillable = [
        "bike",
        "city"
    ];
}
