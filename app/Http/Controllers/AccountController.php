<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    /**
     * Display list of accounts
     */
    public function index()
    {
        $accounts = Account::with('parent', 'children', 'transactions')
            ->orderBy('code')
            ->get();

        return Inertia::render('Accounts/Index', [
            'accounts' => $accounts,
        ]);
    }

    /**
     * Store new account
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'      => 'required|string',
            'type'      => 'required|in:asset,liability,equity,revenue,expense',
            'parent_id' => 'nullable|exists:accounts,id',
        ]);

        // Prefix kode akun berdasarkan tipe
        $prefixMap = [
            'asset'     => '1',
            'liability' => '2',
            'equity'    => '3',
            'revenue'   => '4',
            'expense'   => '5',
        ];

        $prefix = $prefixMap[$validated['type']];

        // Ambil kode terakhir berdasarkan tipe
        $lastCode = Account::where('type', $validated['type'])
            ->where('code', 'like', $prefix . '%')
            ->max('code');

        $newCode = $lastCode
            ? ((int) $lastCode + 1)
            : ($prefix . '001');

        Account::create([
            'code'      => $newCode,
            'name'      => $validated['name'],
            'type'      => $validated['type'],
            'parent_id' => $validated['parent_id'] ?? null,
            'is_active' => true,
        ]);

        return redirect()->back();
    }

    /**
     * Update existing account
     */
    public function update(Request $request, Account $account)
    {
        $validated = $request->validate([
            'name'      => 'required|string',
            'type'      => 'required|in:asset,liability,equity,revenue,expense',
            'parent_id' => 'nullable|exists:accounts,id',
            'is_active' => 'required|boolean',
        ]);

        $account->update($validated);

        return redirect()->back();
    }

    /**
     * Delete account (with safety check)
     */
    public function destroy(Account $account)
    {
        // ❗ Jangan hapus akun yang sudah punya transaksi
        if ($account->transactions()->exists()) {
            return redirect()->back()->withErrors([
                'delete' => 'Account cannot be deleted because it has transactions.',
            ]);
        }

        $account->delete();

        return redirect()->back();
    }
}
