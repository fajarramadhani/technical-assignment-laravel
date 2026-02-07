import { Link, router } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  function logout() {
    router.post(route('logout'));
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
      {/* HEADER + LOGOUT */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
        }}
      >
        <div>
          <h1 style={{ marginBottom: 4 }}>Dashboard</h1>
          <p style={{ color: '#555' }}>
            Welcome back{auth?.user ? `, ${auth.user.name}` : ''} 👋
          </p>
        </div>

        <button
          onClick={logout}
          style={{
            padding: '8px 14px',
            background: '#c0392b',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      {/* MAIN NAVIGATION CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
          marginBottom: 32,
        }}
      >
        {/* ACCOUNTS */}
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: 6,
            padding: 16,
            background: '#fafafa',
          }}
        >
          <h3 style={{ marginBottom: 8 }}>Chart of Accounts</h3>
          <p style={{ color: '#555', marginBottom: 12 }}>
            Manage account structure and balances
          </p>
          <Link href={route('accounts.index')}>
            <button
              style={{
                padding: '8px 14px',
                background: '#3498db',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Go to Accounts
            </button>
          </Link>
        </div>

        {/* TRANSACTIONS */}
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: 6,
            padding: 16,
            background: '#fafafa',
          }}
        >
          <h3 style={{ marginBottom: 8 }}>Transactions</h3>
          <p style={{ color: '#555', marginBottom: 12 }}>
            Record and review financial transactions
          </p>
          <Link href={route('transactions.index')}>
            <button
              style={{
                padding: '8px 14px',
                background: '#2ecc71',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Go to Transactions
            </button>
          </Link>
        </div>
      </div>

      {/* INFO SECTION */}
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: 6,
          padding: 16,
          background: '#fff',
        }}
      >
        <h3 style={{ marginBottom: 8 }}>About This Application</h3>
        <p style={{ color: '#555', lineHeight: 1.6 }}>
          This application is built using Laravel, Inertia.js, and React. It
          provides basic accounting features such as chart of accounts,
          transaction recording with debit and credit validation, filtering,
          and secure authentication using Laravel Breeze.
        </p>
      </div>
    </div>
  );
}
