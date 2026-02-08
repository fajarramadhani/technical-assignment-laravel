import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-5xl mx-auto space-y-6">

                    {/* Header */}
                    <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">
                                Dashboard
                            </h1>
                            <p className="text-gray-500 mt-1">
                                Welcome, {auth?.user?.name}
                            </p>
                        </div>

                        {/* Logout Button */}
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </Link>
                    </div>

                    {/* Menu Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Chart of Accounts
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Manage your financial accounts
                            </p>
                            <Link
                                href="/accounts"
                                className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:underline"
                            >
                                Open Accounts →
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Transactions
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Record debit and credit transactions
                            </p>
                            <Link
                                href="/transactions"
                                className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:underline"
                            >
                                Open Transactions →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
