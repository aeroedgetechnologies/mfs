const express = require('express');
const News = require('../models/News');
const router = express.Router();

// Get all news
router.get('/', async (req, res) => {
  const news = await News.find().sort({ date: -1 });
  res.json(news);
});

// Add news item
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const news = new News({ title, content });
  await news.save();
  res.status(201).json(news);
});

module.exports = router; 