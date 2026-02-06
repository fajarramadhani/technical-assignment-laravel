import { useForm } from '@inertiajs/react';

export default function Index({ accounts, transactions }) {
  const { data, setData, post, reset, errors } = useForm({
  account_id: '',
  date: '',
  description: '',
  debit: '',
  credit: '',
});


  function submit(e) {
    e.preventDefault();
    post(route('transactions.store'), {
      onSuccess: () => reset(),
    });
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Transactions</h1>

    
    {errors.amount && (
      <div style={{ color: 'red', marginBottom: 12 }}>
        {errors.amount}
      </div>
    )}

      <form onSubmit={submit}>
        <select
          value={data.account_id}
          onChange={e => setData('account_id', e.target.value)}
        >
          <option value="">Select Account</option>
          {accounts.map(acc => (
            <option key={acc.id} value={acc.id}>
              {acc.code} - {acc.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={data.date}
          onChange={e => setData('date', e.target.value)}
        />

        <input
          placeholder="Description"
          value={data.description}
          onChange={e => setData('description', e.target.value)}
        />

        <input
          placeholder="Debit"
          value={data.debit}
          onChange={e => setData('debit', e.target.value)}
        />

        <input
          placeholder="Credit"
          value={data.credit}
          onChange={e => setData('credit', e.target.value)}
        />

        <button type="submit">Add Transaction</button>
      </form>

      <hr />

      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.date} | {tx.account?.name} | D:{tx.debit} C:{tx.credit}
          </li>
        ))}
      </ul>
    </div>
  );
}
