import { useForm, router, Link } from '@inertiajs/react';

export default function Index({ accounts, transactions, filters, errors }) {
  const { data, setData, post, reset } = useForm({
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
    <div
      style={{
        padding: 24,
        maxWidth: 1100,
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* BACK TO DASHBOARD */}
      <div style={{ marginBottom: 16 }}>
        <Link href={route('dashboard')}>
          <button
            style={{
              padding: '6px 12px',
              background: '#555',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            ← Back to Dashboard
          </button>
        </Link>
      </div>

      <h1 style={{ marginBottom: 24 }}>Transactions</h1>

      {/* FILTER CARD */}
      <div
        style={{
          border: '1px solid #ddd',
          padding: 16,
          marginBottom: 24,
          borderRadius: 6,
          background: '#fafafa',
        }}
      >
        <strong>Filter by Account</strong>
        <div style={{ marginTop: 8 }}>
          <select
            value={filters?.account_id || ''}
            onChange={e =>
              router.get(
                route('transactions.index'),
                { account_id: e.target.value },
                { preserveState: true }
              )
            }
            style={{
              padding: 8,
              width: 320,
              borderRadius: 4,
              border: '1px solid #ccc',
            }}
          >
            <option value="">All Accounts</option>
            {accounts.map(acc => (
              <option key={acc.id} value={acc.id}>
                {acc.code} - {acc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* FORM CARD */}
      <div
        style={{
          border: '1px solid #ddd',
          padding: 16,
          marginBottom: 24,
          borderRadius: 6,
          background: '#fafafa',
        }}
      >
        <h3 style={{ marginBottom: 12 }}>Add Transaction</h3>

        {errors?.amount && (
          <div style={{ color: 'red', marginBottom: 12 }}>
            {errors.amount}
          </div>
        )}

        <form onSubmit={submit}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <select
              value={data.account_id}
              onChange={e => setData('account_id', e.target.value)}
              required
              style={{ flex: 2, padding: 8 }}
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
              required
              style={{ flex: 1, padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <input
              type="text"
              placeholder="Description"
              value={data.description}
              onChange={e => setData('description', e.target.value)}
              style={{ width: '100%', padding: 8 }}
            />
          </div>

          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <input
              type="number"
              placeholder="Debit"
              value={data.debit}
              onChange={e => setData('debit', e.target.value)}
              style={{ flex: 1, padding: 8 }}
            />
            <input
              type="number"
              placeholder="Credit"
              value={data.credit}
              onChange={e => setData('credit', e.target.value)}
              style={{ flex: 1, padding: 8 }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '8px 16px',
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            Save Transaction
          </button>
        </form>
      </div>

      {/* TABLE CARD */}
      <div
        style={{
          border: '1px solid #ddd',
          padding: 16,
          borderRadius: 6,
          background: '#fff',
        }}
      >
        <h3 style={{ marginBottom: 12 }}>Transaction List</h3>

        <table
          width="100%"
          cellPadding="8"
          cellSpacing="0"
          style={{ borderCollapse: 'collapse' }}
        >
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th align="left">Date</th>
              <th align="left">Account</th>
              <th align="left">Description</th>
              <th align="right">Debit</th>
              <th align="right">Credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" align="center">
                  No transactions found
                </td>
              </tr>
            )}

            {transactions.map(tx => (
              <tr key={tx.id} style={{ borderTop: '1px solid #eee' }}>
                <td>{tx.date}</td>
                <td>
                  {tx.account.code} - {tx.account.name}
                </td>
                <td>{tx.description}</td>
                <td align="right">{tx.debit || '-'}</td>
                <td align="right">{tx.credit || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
