<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stations extends Model
{
    protected $table = 'stations';

    public $timestamps = false;

    protected $fillable = [
        'slots'
    ];
}
