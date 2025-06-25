# Backend API - Resep Makanan

Ini adalah backend RESTful API untuk manajemen data resep makanan, dibuat menggunakan:

- Node.js
- Express.js
- MongoDB Atlas

## Cara Menjalankan

1. Clone atau download repository ini
2. Jalankan perintah berikut untuk install dependensi:
   ```
   npm install
   ```
3. Buat file `.env` berdasarkan `.env.example`:
   ```
   PORT=5000
   MONGO_URI=your-mongodb-uri-here
   ```
4. Jalankan server dengan:
   ```
   node app.js
   ```

## Endpoint API

| Metode | Endpoint             | Deskripsi             |
|--------|----------------------|------------------------|
| GET    | /api/recipes         | Ambil semua resep     |
| GET    | /api/recipes/:id     | Ambil satu resep      |
| POST   | /api/recipes         | Tambah resep baru     |
| PUT    | /api/recipes/:id     | Perbarui resep        |
| DELETE | /api/recipes/:id     | Hapus resep           |

## Contoh Response

```json
{
  "_id": "665bf2df...",
  "title": "Nasi Goreng",
  "ingredients": ["nasi", "telur", "kecap"],
  "instructions": "Tumis sampai matang",
  "cookingTime": 15,
  "createdAt": "2025-06-25T13:00:15.297Z",
  "__v": 0
}
```

## Dibuat oleh
Nama: Ervina Nur Septiva 
Nim : A710220047
Mata Kuliah: Pemrograman Web Lanjut
