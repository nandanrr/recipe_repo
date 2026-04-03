// public/script.js

async function loadRecipes() {
  try {
    const res = await fetch('/api/recipes');
    const recipes = await res.json();

    const container = document.getElementById('recipeList');
    container.innerHTML = recipes.map(r => `
      <div class="card">
        <img src="${r.imageUrl || 'https://via.placeholder.com/200'}" alt="${r.title}">
        <h3>${r.title}</h3>
        <p>${r.description || 'No description provided'}</p>
        <button onclick="viewRecipe('${r._id}')">View</button>
      </div>
    `).join('');
  } catch (err) {
    console.error('Failed to load recipes', err);
  }
}

function viewRecipe(id) {
  window.location.href = `/recipe.html?id=${id}`;
}

window.onload = loadRecipes;
