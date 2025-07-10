const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find().sort({ date: -1 });
  res.json(jobs);
});

// Add job
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const job = new Job({ title, description });
  await job.save();
  res.status(201).json(job);
});

module.exports = router; 