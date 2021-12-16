<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customer extends Model
{
    protected $table = "customers";

    public $timestamps = false;
    protected $hidden = [
        "account"
    ];
    protected $fillable = [
        "name",
        "credits",
        "account"
    ];

    public function ownedBy(): BelongsTo
    {
        return $this->belongsTo(Account::class, "account", "id");
    }
}
