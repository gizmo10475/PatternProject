<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class bikes extends Model
{
    protected $table = 'bikes';

    public $timestamps = false;

    protected $primaryKey = 'pid';
}
