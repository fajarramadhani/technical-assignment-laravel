# Technical Assignment – Full Stack Developer

## 📌 Overview
Aplikasi web sederhana untuk mengelola **Chart of Accounts** dan **Transactions**.
Aplikasi ini dibuat sebagai technical assignment dengan fokus pada struktur code,
relasi data, dan business logic sederhana di sisi backend dan frontend.

Tech utama yang digunakan:
- Laravel
- Inertia.js
- React
- MySQL
- Docker
- Laravel Breeze (Authentication)

---

## 🛠 Tech Stack
- Backend: Laravel
- Frontend: React + Inertia.js
- Database: MySQL
- Authentication: Laravel Breeze
- Containerization: Docker & Docker Compose
- Styling: Tailwind CSS
- Build Tool: Vite

---

## ⚙️ Installation & Setup (Docker)

### 1. Clone Repository
```bash
git clone https://github.com/username/repository-name.git
cd repository-name

### 2.⁠ ⁠Environment Setup
cp .env.example .env
### Sesuaikan konfigurasi database di file .env agar sesuai dengan docker-compose.yml.

### 3.⁠ ⁠Build & Run Docker Containers
docker compose up -d --build  

### 4. Install Dependencies (Jika diperlukan)
docker compose exec app composer install
docker compose exec app npm install
docker compose exec app npm run build

### 5. Generate Application Key
docker compose exec app php artisan key:generate

### 6. Run Database Migration
docker compose exec app php artisan migrate

Akses aplikasi di:  
https://localhost:8000

## 🔐 Authentication
- Login & Register menggunakan Laravel Breeze
- Semua halaman Accounts & Transactions dilindungi middleware `auth`

## 📂 Features

### Accounts
- Menampilkan daftar akun (Chart of Accounts)
- Menambahkan akun baru (code, name, type, balance)
- Validasi input
- Data tersimpan di database

### Transactions
- Menampilkan daftar transaksi
- Relasi transaksi dengan account
- Mendukung transaksi Debit dan Credit
- Saldo account otomatis ter-update
- Validasi input dan error handling ditampilkan di UI

## 🧪 Testing

🧪 How to Test the Application
1. Authentication
 - Register user baru
 - Login menggunakan akun yang telah dibuat

2. Create Account
 - Masuk ke halaman Accounts
 - Isi form:
    Account Code (contoh: 1001)
    Account Name (contoh: Cash)
    Account Type (Asset, Liability, Equity, Revenue, Expense)
    Opening Balance

 - Klik Save
 - Account akan muncul di list

3. Create Transaction
- Masuk ke halaman Transactions
- Pilih account
- Pilih jenis transaksi:
    -  Debit → menambah saldo
    - Credit → mengurangi saldo
- Masukkan amount dan deskripsi
- Klik Save

4. Verify Balance
- Kembali ke halaman Accounts
- Pastikan saldo account sudah berubah sesuai transaksi

## 📁 Folder Structure (Important)
app/
 ├── Models/
 │    ├── Account.php
 │    └── Transaction.php
 ├── Http/Controllers/
 │    ├── AccountController.php
 │    └── TransactionController.php

database/
 └── migrations/

routes/
 └── web.php

resources/js/Pages/
 ├── Accounts/
 └── Transactions/


## 📌 Notes
- File .env tidak di-commit ke repository
- Aplikasi dijalankan menggunakan Docker
- Fokus utama project ini adalah implementasi logic dan struktur aplikasi


## 👤 Author
Nama: Muhammad Fajar Ramadhani  
Position: Full Stack Developer Candidate





<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
