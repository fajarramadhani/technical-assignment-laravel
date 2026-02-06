<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Account;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        return Inertia::render('Transactions/Index', [
            'accounts' => Account::orderBy('code')->get(),
            'transactions' => Transaction::with('account')
                ->orderBy('date')
                ->get(),
        ]);
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'account_id'  => 'required|exists:accounts,id',
        'date'        => 'required|date',
        'description' => 'nullable|string',
        'debit'       => 'nullable|numeric|min:0',
        'credit'      => 'nullable|numeric|min:0',
    ]);

    // ❗ Accounting rule validation
    if (
        (empty($validated['debit']) && empty($validated['credit'])) ||
        (!empty($validated['debit']) && !empty($validated['credit']))
    ) {
        return back()->withErrors([
            'amount' => 'Either debit or credit must be filled (not both).',
        ]);
    }

    Transaction::create([
        'account_id'  => $validated['account_id'],
        'date'        => $validated['date'],
        'description' => $validated['description'],
        'debit'       => $validated['debit'] ?? 0,
        'credit'      => $validated['credit'] ?? 0,
    ]);

    return redirect()->back();
}
}
