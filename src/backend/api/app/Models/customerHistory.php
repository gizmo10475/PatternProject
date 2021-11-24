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
        'start_location',
        'start_time',
        'end_location',
        // 'end_time',
        'cost',
        'city'
    ];
}
