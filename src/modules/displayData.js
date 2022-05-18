import getRecipes from './api.js';

const container = document.getElementById('container');

const displayCards = async () => {
  const recipes = await getRecipes();

  for (let i = 0; i < recipes.length; i += 1) {
    const card = document.createElement('ul');
    if (i < 9) {
      card.innerHTML = `<li><img src= ${recipes[i].thumbnail_url}></li>
    <li class="text1">${recipes[i].name}</li>
    <li class="text2">id= ${recipes[i].id} <button type="button" class="likes">Likes</button></li>
    <button type= "button" class= "comment">Comment</button>`;
      card.className = 'card';
      container.append(card);
    }
  }
};

export default displayCards;
