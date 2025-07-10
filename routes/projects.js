const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ date: -1 });
  res.json(projects);
});

// Add project
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const project = new Project({ name, description });
  await project.save();
  res.status(201).json(project);
});

module.exports = router; 