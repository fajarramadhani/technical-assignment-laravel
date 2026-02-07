import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <>
      <Head title="Log in" />

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f5f5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            width: 360,
            background: '#fff',
            padding: 24,
            borderRadius: 8,
            border: '1px solid #ddd',
          }}
        >
          <h1 style={{ marginBottom: 16, textAlign: 'center' }}>
            Login
          </h1>

          {status && (
            <div
              style={{
                marginBottom: 12,
                color: 'green',
                fontSize: 14,
                textAlign: 'center',
              }}
            >
              {status}
            </div>
          )}

          <form onSubmit={submit}>
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                required
                autoFocus
                style={{
                  width: '100%',
                  padding: 8,
                  border: '1px solid #ccc',
                  borderRadius: 4,
                }}
              />
              {errors.email && (
                <div style={{ color: 'red', fontSize: 12 }}>
                  {errors.email}
                </div>
              )}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>
                Password
              </label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: 8,
                  border: '1px solid #ccc',
                  borderRadius: 4,
                }}
              />
              {errors.password && (
                <div style={{ color: 'red', fontSize: 12 }}>
                  {errors.password}
                </div>
              )}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label>
                <input
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                />{' '}
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={processing}
              style={{
                width: '100%',
                padding: 10,
                background: '#111',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Log in
            </button>
          </form>

          {canResetPassword && (
            <div style={{ marginTop: 12, textAlign: 'center' }}>
              <Link
                href={route('password.request')}
                style={{ color: '#3498db', fontSize: 14 }}
              >
                Forgot your password?
              </Link>
            </div>
          )}

          {/* REGISTER LINK */}
          <div
            style={{
              marginTop: 16,
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            <span>Don’t have an account?</span>{' '}
            <Link
              href={route('register')}
              style={{ color: '#3498db', fontWeight: 'bold' }}
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
