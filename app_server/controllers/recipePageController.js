const Recipe = require('../../app_api/models/Recipe');

const listPage = async (req, res) => {
  const items = await Recipe.find().sort({ createdAt: -1 });
  res.render('recipes/list', { recipes: items });
};

const detailPage = async (req, res) => {
  const item = await Recipe.findById(req.params.id);
  if (!item) return res.status(404).send('Not found');
  res.render('recipes/detail', { recipe: item });
};

const createForm = (req, res) => res.render('recipes/create');

const createAction = async (req, res) => {
  const body = { ...req.body };
  body.ingredients = body.ingredients ? body.ingredients.split(',').map(s => s.trim()).filter(Boolean) : [];
  body.steps = body.steps ? body.steps.split(',').map(s => s.trim()).filter(Boolean) : [];
  await Recipe.create(body);
  res.redirect('/recipes');
};

const editForm = async (req, res) => {
  const item = await Recipe.findById(req.params.id);
  if (!item) return res.status(404).send('Not found');
  res.render('recipes/edit', { recipe: item });
};

const editAction = async (req, res) => {
  const body = { ...req.body };
  body.ingredients = body.ingredients ? body.ingredients.split(',').map(s => s.trim()).filter(Boolean) : [];
  body.steps = body.steps ? body.steps.split(',').map(s => s.trim()).filter(Boolean) : [];
  const updated = await Recipe.findByIdAndUpdate(req.params.id, body, { new: true });
  if (!updated) return res.status(404).send('Not found');
  res.redirect(`/recipes/${req.params.id}`);
};

const deleteAction = async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.redirect('/recipes');
};

module.exports = { listPage, detailPage, createForm, createAction, editForm, editAction, deleteAction };
