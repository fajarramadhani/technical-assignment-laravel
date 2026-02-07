<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    /**
     * Mass assignable attributes
     */
    protected $fillable = [
        'account_id',
        'date',
        'description',
        'debit',
        'credit',
    ];

    /**
     * Cast attributes
     */
    protected $casts = [
        'date'   => 'date',
        'debit'  => 'float',
        'credit' => 'float',
    ];

    /**
     * Relationship: Transaction belongs to an Account
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    /**
     * Accessor: amount (net value)
     * debit - credit
     */
    public function getAmountAttribute()
    {
        return ($this->debit ?? 0) - ($this->credit ?? 0);
    }
}
