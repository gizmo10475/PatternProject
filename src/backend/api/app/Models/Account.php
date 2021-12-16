<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Laravel\Sanctum\HasApiTokens;

class Account extends Model
{
    use HasFactory;
    use HasApiTokens;
    use Authenticatable;

    protected $table = "accounts";
    public $timestamps = false;
    protected $fillable = [
        "email",
        "admin"
    ];

    public function customer(): HasOne {
        return $this->hasOne(Customer::class, "account", "id");
    }

    public function token(): HasOne {
        return $this->hasOne(ApiToken::class, "tokenable_id", "id");
    }
}
