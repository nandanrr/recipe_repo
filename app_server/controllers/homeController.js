const Recipe = require('../../app_api/models/Recipe');

const home = async (req, res) => {
  const recent = await Recipe.find().sort({ createdAt: -1 }).limit(6);
  res.render('home', { recipes: recent });
};

module.exports = { home };
