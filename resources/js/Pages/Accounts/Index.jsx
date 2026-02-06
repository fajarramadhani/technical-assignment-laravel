import { useForm } from '@inertiajs/react';

export default function Index({ accounts }) {
  const { data, setData, post, reset } = useForm({
    name: '',
    type: 'asset',
  });

  function submit(e) {
    e.preventDefault();
    post(route('accounts.store'), {
      onSuccess: () => reset(),
    });
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Chart of Accounts</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Account name"
          value={data.name}
          onChange={e => setData('name', e.target.value)}
        />

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

        <button type="submit">Add Account</button>
      </form>

      <ul>
        {accounts.map(acc => (
          <li key={acc.id}>
            {acc.code} - {acc.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
