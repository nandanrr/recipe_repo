const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    ingredients: { type: [String], default: [] },
    steps: { type: [String], default: [] },
    cuisine: { type: String, default: '' },
    prepTimeMinutes: { type: Number, default: 0 },
    cookTimeMinutes: { type: Number, default: 0 },
    imageUrl: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recipe', RecipeSchema);
