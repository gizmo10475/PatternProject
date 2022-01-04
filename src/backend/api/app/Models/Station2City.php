<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station2City extends Model
{
    protected $table = 'station2city';

    public $timestamps = false;

    protected $primaryKey = 'id';
    protected $fillable = [
        "city",
        "station"
    ];
}
