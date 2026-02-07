<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Account;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display list of transactions with optional filter by account
     */
    public function index(Request $request)
    {
        $transactions = Transaction::with('account')
            ->when($request->account_id, function ($query) use ($request) {
                $query->where('account_id', $request->account_id);
            })
            ->orderBy('date', 'desc')
            ->get();

        return Inertia::render('Transactions/Index', [
            'accounts'     => Account::orderBy('code')->get(),
            'transactions' => $transactions,
            'filters'      => $request->only('account_id'),
        ]);
    }

    /**
     * Store new transaction
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'account_id'  => 'required|exists:accounts,id',
            'date'        => 'required|date',
            'description' => 'nullable|string',
            'debit'       => 'nullable|numeric|min:0',
            'credit'      => 'nullable|numeric|min:0',
        ]);

        // Accounting validation:
        // - salah satu wajib diisi
        // - tidak boleh debit & credit bersamaan
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
            'description' => $validated['description'] ?? null,
            'debit'       => $validated['debit'] ?? 0,
            'credit'      => $validated['credit'] ?? 0,
        ]);

        return redirect()->back();
    }
}
