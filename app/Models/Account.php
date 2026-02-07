<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'type',
        'parent_id',
        'is_active',
    ];

    /**
     * Relasi: akun induk (parent)
     */
    public function parent()
    {
        return $this->belongsTo(Account::class, 'parent_id');
    }

    /**
     * Relasi: akun turunan (children)
     */
    public function children()
    {
        return $this->hasMany(Account::class, 'parent_id');
    }

    /**
     * Relasi: akun memiliki banyak transaksi
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    /**
     * Accessor: hitung saldo akun
     */
    public function getBalanceAttribute()
    {
        return $this->transactions->sum('debit')
             - $this->transactions->sum('credit');
    }
}
