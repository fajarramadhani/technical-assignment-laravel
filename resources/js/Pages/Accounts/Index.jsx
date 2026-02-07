import { useForm, router, Link } from '@inertiajs/react';

export default function Index({ accounts, errors }) {
  const { data, setData, post, reset } = useForm({
    id: null,
    name: '',
    type: 'asset',
    is_active: true,
  });

  function submit(e) {
    e.preventDefault();

    // UPDATE
    if (data.id) {
      router.put(
        route('accounts.update', data.id),
        {
          name: data.name,
          type: data.type,
          is_active: data.is_active,
        },
        {
          onSuccess: () => resetForm(),
        }
      );
      return;
    }

    // CREATE
    post(route('accounts.store'), {
      onSuccess: () => resetForm(),
    });
  }

  function resetForm() {
    reset();
    setData({
      id: null,
      name: '',
      type: 'asset',
      is_active: true,
    });
  }

  function editAccount(account) {
    setData({
      id: account.id,
      name: account.name,
      type: account.type,
      is_active: account.is_active,
    });
  }

  function deleteAccount(account) {
    if (confirm('Are you sure you want to delete this account?')) {
      router.delete(route('accounts.destroy', account.id));
    }
  }

  return (
    <div
      style={{
        padding: 24,
        maxWidth: 1000,
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

      <h1 style={{ marginBottom: 24 }}>Chart of Accounts</h1>

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
        <h3 style={{ marginBottom: 12 }}>
          {data.id ? 'Edit Account' : 'Add New Account'}
        </h3>

        <form onSubmit={submit}>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>
              Account Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              placeholder="e.g. Cash"
              required
              style={{
                width: '100%',
                padding: 8,
                border: '1px solid #ccc',
                borderRadius: 4,
              }}
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>
              Account Type
            </label>
            <select
              value={data.type}
              onChange={e => setData('type', e.target.value)}
              style={{
                width: '100%',
                padding: 8,
                border: '1px solid #ccc',
                borderRadius: 4,
              }}
            >
              <option value="asset">Asset</option>
              <option value="liability">Liability</option>
              <option value="equity">Equity</option>
              <option value="revenue">Revenue</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          {data.id && (
            <div style={{ marginBottom: 12 }}>
              <label>
                <input
                  type="checkbox"
                  checked={data.is_active}
                  onChange={e => setData('is_active', e.target.checked)}
                />{' '}
                Active
              </label>
            </div>
          )}

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
            {data.id ? 'Update Account' : 'Save Account'}
          </button>

          {data.id && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                padding: '8px 16px',
                marginLeft: 8,
                background: '#bbb',
                color: '#000',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          )}
        </form>

        {errors?.delete && (
          <div style={{ color: 'red', marginTop: 12 }}>
            {errors.delete}
          </div>
        )}
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
        <h3 style={{ marginBottom: 12 }}>Account List</h3>

        <table
          width="100%"
          cellPadding="8"
          cellSpacing="0"
          style={{ borderCollapse: 'collapse' }}
        >
          <thead>
            <tr style={{ background: '#f0f0f0' }}>
              <th align="left">Code</th>
              <th align="left">Name</th>
              <th align="left">Type</th>
              <th align="right">Balance</th>
              <th align="center" width="140">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {accounts.length === 0 && (
              <tr>
                <td colSpan="5" align="center">
                  No accounts found
                </td>
              </tr>
            )}

            {accounts.map(account => (
              <tr key={account.id} style={{ borderTop: '1px solid #eee' }}>
                <td>{account.code}</td>
                <td>{account.name}</td>
                <td>{account.type}</td>
                <td align="right">{account.balance}</td>
                <td align="center">
                  <button
                    onClick={() => editAccount(account)}
                    style={{
                      padding: '6px 10px',
                      background: '#3498db',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAccount(account)}
                    style={{
                      padding: '6px 10px',
                      background: '#c0392b',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 4,
                      marginLeft: 6,
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
