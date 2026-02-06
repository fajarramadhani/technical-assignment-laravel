import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <p className="mb-6">Welcome! Choose a menu below:</p>

        <div className="space-x-4">
          <Link
            href="/accounts"
            className="px-4 py-2 bg-black text-white rounded"
          >
            Chart of Accounts
          </Link>

          <Link
            href="/transactions"
            className="px-4 py-2 bg-gray-700 text-white rounded"
          >
            Transactions
          </Link>
        </div>
      </div>
    </>
  );
}
