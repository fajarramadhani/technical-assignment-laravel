import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ accounts }) {
    const { data, setData, post, errors, reset } = useForm({
        code: '',
        name: '',
        type: 'asset',
        balance: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('accounts.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Chart of Accounts</h1>

            <form onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        placeholder="Account Code"
                        value={data.code}
                        onChange={e => setData('code', e.target.value)}
                    />
                    {errors.code && <div style={{ color: 'red' }}>{errors.code}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Account Name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </div>

                <div>
                    <select
                        value={data.type}
                        onChange={e => setData('type', e.target.value)}
                    >
                        <option value="asset">Asset</option>
                        <option value="liability">Liability</option>
                        <option value="equity">Equity</option>
                        <option value="revenue">Revenue</option>
                        <option value="expense">Expense</option>
                    </select>
                    {errors.type && <div style={{ color: 'red' }}>{errors.type}</div>}
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Balance"
                        value={data.balance}
                        onChange={e => setData('balance', e.target.value)}
                    />
                    {errors.balance && <div style={{ color: 'red' }}>{errors.balance}</div>}
                </div>

                <button type="submit">Save</button>
            </form>

            <hr />

            <ul>
                {accounts.map(account => (
                    <li key={account.id}>
                        {account.code} - {account.name} ({account.type}) - {account.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
}