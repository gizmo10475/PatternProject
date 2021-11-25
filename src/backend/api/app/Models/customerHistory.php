<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customerHistory extends Model
{
    protected $table = 'travel_log';

    public $timestamps = false;

    protected $fillable = [
        'customer',
        'bike',
        'start_longitude',
        'start_latitude',
        'start_time',
        'end_longitude',
        'end_latitude',
        // 'end_time',
        'cost',
        'city'
    ];
}
