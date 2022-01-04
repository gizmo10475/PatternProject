<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bike extends Model
{
    use HasFactory;

    protected $table = 'bikes';

    public $timestamps = false;

    protected $primaryKey = "id";
    protected $fillable = [
        'longitude',
        'latitude',
        'active',
        'speed',
        'charging',
        'warning'
    ];
}
