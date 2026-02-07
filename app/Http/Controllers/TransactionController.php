<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        return Inertia::render('Transactions/Index', [
            'accounts' => Account::where('is_active', true)->get(),
            'transactions' => Transaction::with('account')->latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'account_id' => 'required|exists:accounts,id',
            'type' => 'required|in:debit,credit',
            'amount' => 'required|numeric|min:1',
            'description' => 'nullable|string',
        ]);

        $account = Account::findOrFail($validated['account_id']);

        if ($validated['type'] === 'debit') {
            $account->balance += $validated['amount'];
        } else {
            $account->balance -= $validated['amount'];
        }

        $account->save();

        Transaction::create($validated);

        return redirect()->back();
    }
}