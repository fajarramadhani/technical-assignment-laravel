import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ accounts, transactions }) {
    const { data, setData, post, errors, reset } = useForm({
        account_id: '',
        type: 'debit',
        amount: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('transactions.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Transactions</h1>

            <form onSubmit={submit}>
                <div>
                    <select
                        value={data.account_id}
                        onChange={e => setData('account_id', e.target.value)}
                    >
                        <option value="">-- Select Account --</option>
                        {accounts.map(account => (
                            <option key={account.id} value={account.id}>
                                {account.code} - {account.name}
                            </option>
                        ))}
                    </select>
                    {errors.account_id && <div style={{ color: 'red' }}>{errors.account_id}</div>}
                </div>

                <div>
                    <select
                        value={data.type}
                        onChange={e => setData('type', e.target.value)}
                    >
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={data.amount}
                        onChange={e => setData('amount', e.target.value)}
                    />
                    {errors.amount && <div style={{ color: 'red' }}>{errors.amount}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                    />
                </div>

                <button type="submit">Save</button>
            </form>

            <hr />

            <h3>Transaction History</h3>
            <ul>
                {transactions.map(tx => (
                    <li key={tx.id}>
                        {tx.account?.name} | {tx.type} | {tx.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}