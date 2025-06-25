const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET semua resep
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data resep' });
  }
});

// GET resep by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Resep tidak ditemukan' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

// POST tambah resep
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: 'Gagal menambahkan resep' });
  }
});

// PUT update resep
router.put('/:id', async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Gagal memperbarui resep' });
  }
});

// DELETE hapus resep
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Resep tidak ditemukan' });
    }
    res.json({ message: 'Resep berhasil dihapus' });
  } catch (err) {
  console.error(err); // 👈 ini penting
  res.status(500).json({ error: 'Gagal menghapus resep' });
}
});


module.exports = router;
