const Recipe = require('../models/Recipe');

const list = async (req, res) => {
  const items = await Recipe.find().sort({ createdAt: -1 });
  res.json(items);
};

const getById = async (req, res) => {
  const item = await Recipe.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

const create = async (req, res) => {
  const item = await Recipe.create(req.body);
  res.status(201).json(item);
};

const update = async (req, res) => {
  const item = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

const remove = async (req, res) => {
  const item = await Recipe.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
};

module.exports = { list, getById, create, update, remove };
