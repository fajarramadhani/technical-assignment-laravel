<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'type',
        'amount',
        'description',
    ];

    // Relasi: Transaction milik satu Account
    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
