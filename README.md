# Finance App (Laravel + Inertia + React)

## 📌 Overview

**Finance App** adalah aplikasi manajemen keuangan berbasis web yang dibangun menggunakan **Laravel**, **Inertia.js**, dan **React**, dengan **MySQL** sebagai database.  
Aplikasi ini menyediakan fitur autentikasi, pengelolaan *chart of accounts*, serta pencatatan transaksi debit dan kredit.

Project ini dibuat sebagai bagian dari **technical assignment** dan difokuskan pada:

- Clean & maintainable architecture
- Secure authentication flow
- Konsistensi backend & frontend (Laravel + Inertia)
- Best practice Laravel & Docker environment

---

## 🚀 Tech Stack

- **Backend**: Laravel
- **Frontend**: React (Inertia.js)
- **Authentication**: Laravel Breeze
- **Database**: MySQL 8
- **Web Server**: Nginx
- **Containerization**: Docker & Docker Compose
- **Build Tool**: Vite

---

## ✨ Features

### Authentication
- Register user
- Login user
- Logout
- Session-based authentication (secure)

### Dashboard
- Welcome message untuk user yang login
- Navigasi ke Accounts & Transactions
- Logout button

### Chart of Accounts
- Create account
- Update account
- Delete account (dengan validasi relasi transaksi)
- Menampilkan daftar akun secara terstruktur

### Transactions
- Create transaction (Debit / Credit)
- Validasi: hanya salah satu (debit atau credit) yang boleh diisi
- Filter transaksi berdasarkan account
- Relasi transaksi ke account

---

## 📂 Project Structure (Simplified)
app/
├── Http/Controllers/
├── Models/
resources/
├── js/Pages/
│ ├── Dashboard.jsx
│ ├── Accounts/
│ ├── Transactions/
│ └── Auth/
routes/
├── web.php
database/
├── migrations/
docker/
├── nginx/
│ └── default.conf
docker-compose.yml
Dockerfile

---

## 🐳 Docker Services

| Service | Description |
|-------|-------------|
| app | Laravel application (PHP-FPM) |
| mysql | MySQL 8 database |
| nginx | Web server |

---

## ⚙️ Installation & Setup (Docker)

- Clone Repository
- git clone <repository-url>
- cd finance-app
- cp .env.example .env
- docker compose up -d --build
- docker compose exec app php artisan key:generate
- docker compose exec app php artisan migrate
- npm install
- npm run dev
- Buka aplikasi di browser melalui: http://localhost:8000


## 🔐 Authentication Flow

- User register melalui /register
- User otomatis login setelah register
- User dapat logout melalui dashboard
- User dapat login kembali menggunakan akun yang sama


## 🧪 Testing Checklist
- Docker containers berjalan dengan baik
- MySQL berjalan di dalam Docker
- Register user berhasil
- Login & logout berhasil
- Dashboard tampil dengan normal
- CRUD account berjalan
- Validasi delete account dengan transaksi
- Create transaction debit / credit
- Filter transaksi berdasarkan account


## 📝 Notes
- File .env tidak disertakan dalam repository demi keamanan
- Database menggunakan MySQL Docker, bukan SQLite
- Aplikasi dapat dijalankan dengan satu perintah docker compose up
- Frontend menggunakan Vite untuk hot-reload selama development

## 👨‍💻 Author
Muhammad Fajar Ramadhani

## 📎 License
This project is created for technical assessment purposes only.