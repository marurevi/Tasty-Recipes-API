import { getLikes } from './involment-api.js';

const container = document.querySelector('.grid-container');

const displayCards = async (recipes) => {

  for (let i = 0; i < recipes.length; i += 1) {
    const nroLikes = await getLikes(recipes[i].id); // eslint-disable-line
    const card = document.createElement('ul');
    card.innerHTML = `<li><img src= ${recipes[i].thumbnail_url}></li>
    <li class="text1">${recipes[i].name}</li>
    <li class="text2"><button type="button" class="likes">.....</button><br>Likes ${nroLikes}</li>
    <button type= "button" class= "comment" id="${i}">Comment</button>`;
    card.className = 'card';
    container.append(card);
  }
};

export default displayCards;
