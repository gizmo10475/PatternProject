<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class station2city extends Model
{
    protected $table = 'station2city';

    public $timestamps = false;

    protected $primaryKey = 'pid';
}
