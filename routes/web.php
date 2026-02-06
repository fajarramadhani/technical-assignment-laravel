<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return redirect('/login');
});

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth'])->group(function () {

    // Dashboard (Breeze)
    Route::get('/dashboard', function () {
        return inertia('Dashboard');
    })->name('dashboard');

    // Chart of Accounts
    Route::get('/accounts', [AccountController::class, 'index'])
        ->name('accounts.index');

    Route::post('/accounts', [AccountController::class, 'store'])
        ->name('accounts.store');

    // Transactions
    Route::get('/transactions', [TransactionController::class, 'index'])
        ->name('transactions.index');

    Route::post('/transactions', [TransactionController::class, 'store'])
        ->name('transactions.store');
});

/*
|--------------------------------------------------------------------------
| Auth Routes (Laravel Breeze)
|--------------------------------------------------------------------------
*/
require __DIR__.'/auth.php';
