const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');

// Konfigurasi environment variables
dotenv.config();

const app = express();

// Middleware untuk parsing request body dalam format JSON
app.use(express.json());

// Routing utama
app.use('/api/recipes', recipeRoutes);

// Koneksi ke MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Terhubung ke MongoDB Atlas'))
.catch(err => console.error('Koneksi MongoDB gagal:', err));

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
