# Finance App (Laravel + Inertia + React)

## 📌 Overview

Finance App adalah aplikasi sederhana untuk manajemen keuangan berbasis web yang dibangun menggunakan **Laravel**, **Inertia.js**, dan **React**. Aplikasi ini menyediakan fitur autentikasi, pengelolaan chart of accounts, serta pencatatan transaksi debit & kredit.

Project ini dibuat sebagai bagian dari **technical assignment** dan difokuskan pada:

* Clean architecture
* Secure authentication
* Konsistensi antara backend & frontend
* Best practice Laravel

---

## 🚀 Tech Stack

* **Backend**: Laravel
* **Frontend**: React (via Inertia.js)
* **Authentication**: Laravel Breeze
* **Database**: SQLite
* **Build Tool**: Vite

---

## ✨ Features

### Authentication

* Register user
* Login user
* Logout
* Session-based authentication (secure)

### Dashboard

* Welcome message (logged-in user)
* Navigation ke Accounts & Transactions
* Logout button

### Chart of Accounts

* Create account
* Update account
* Delete account (dengan validasi relasi transaksi)
* Tampilkan balance akun

### Transactions

* Create transaction (Debit / Credit)
* Validasi: hanya debit atau credit yang boleh diisi
* Filter transaksi berdasarkan account
* Relasi transaksi ke account

---

## 📂 Project Structure (Simplified)

```
app/
├── Http/Controllers/
├── Models/
resources/
├── js/Pages/
│   ├── Dashboard.jsx
│   ├── Accounts/
│   ├── Transactions/
│   └── Auth/
routes/
├── web.php
database/
├── migrations/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
cd finance-app
```

### 2️⃣ Install Dependencies

```bash
composer install
npm install
```

### 3️⃣ Environment Setup

Copy file `.env.example` menjadi `.env`

```bash
cp .env.example .env
```

Generate app key:

```bash
php artisan key:generate
```

### 4️⃣ Database Setup (SQLite)

Buat file database:

```bash
touch database/database.sqlite
```

Pastikan `.env` berisi:

```env
DB_CONNECTION=sqlite
```

### 5️⃣ Migration

```bash
php artisan migrate
```

### 6️⃣ Run Application

```bash
php artisan serve
npm run dev
```

Akses aplikasi di:

```
http://localhost:8000
```

---

## 🔐 Authentication Flow

1. User register melalui `/register`
2. User otomatis login setelah register
3. User dapat logout melalui dashboard
4. User dapat login kembali menggunakan akun yang sama

---

## 🧪 Testing Checklist

* [ ] Register user berhasil
* [ ] Login & logout berhasil
* [ ] CRUD account berjalan
* [ ] Validasi delete account dengan transaksi
* [ ] Create transaction debit / credit
* [ ] Filter transaksi berdasarkan account

---

## 📝 Notes

* File `.env` dan `database.sqlite` **tidak disertakan** dalam repository demi keamanan
* Project menggunakan konfigurasi default Laravel agar mudah dijalankan di environment lain

---

## 👨‍💻 Author

**Fajar Ramadhani**

---

## 📎 License

This project is created for technical assessment purposes.
