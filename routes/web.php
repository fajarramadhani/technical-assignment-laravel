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
    return redirect()->route('login');
});

Route::middleware(['auth'])->group(function () {

    /**
     * Dashboard
     * Pastikan file ada di:
     * resources/js/Pages/Dashboard.jsx
     */
    Route::get('/dashboard', function () {
        return inertia('Dashboard', [
            'message' => 'Dashboard loaded successfully',
        ]);
    })->name('dashboard');

    /**
     * Accounts
     */
    Route::get('/accounts', [AccountController::class, 'index'])
        ->name('accounts.index');

    Route::post('/accounts', [AccountController::class, 'store'])
        ->name('accounts.store');

    Route::put('/accounts/{account}', [AccountController::class, 'update'])
        ->name('accounts.update');

    Route::delete('/accounts/{account}', [AccountController::class, 'destroy'])
        ->name('accounts.destroy');

    /**
     * Transactions
     */
    Route::get('/transactions', [TransactionController::class, 'index'])
        ->name('transactions.index');

    Route::post('/transactions', [TransactionController::class, 'store'])
        ->name('transactions.store');
});

require __DIR__ . '/auth.php';
