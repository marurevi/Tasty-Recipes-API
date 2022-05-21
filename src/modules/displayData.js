import { getLikesArr, addLike } from './involvement-api.js';
import cardsCounter from './cards-counter.js';
import { showPopup } from './popup.js';

const container = document.querySelector('.grid-container');
const counterDisplay = document.querySelector('.counter');

const displayCards = async (recipes) => {
  const arrayOfLikes = await getLikesArr();
  for (let i = 0; i < recipes.length; i += 1) {
    let nroLikes = 0;
    const likedObj = arrayOfLikes.find((element) => element.item_id === recipes[i].id);
    if (likedObj) {
      nroLikes = likedObj.likes;
    }
    const card = document.createElement('ul');
    card.innerHTML = `<li><img src= ${recipes[i].thumbnail_url}></li>
    <li class="text1">${recipes[i].name}</li>
    <li class="text2">
      <button type="button" class="likes" id="${recipes[i].id}">.....</button>
      <br><p class="likes-count" id="p${i}">Likes ${nroLikes}</p>
      </li>
    <button type= "button" class= "comment" id="${i}">Comment</button>`;
    card.className = 'card';
    container.append(card);
    const commentBtn = document.getElementById(`${i}`);
    commentBtn.addEventListener('click', () => {
      showPopup(recipes[i], recipes[i].id);
    });
    const likeBtn = document.getElementById(`${recipes[i].id}`);
    likeBtn.addEventListener('click', () => {
      const likesText = document.getElementById(`p${i}`);
      const itemId = recipes[i].id;
      likesText.textContent = `Likes ${nroLikes += 1}`;
      addLike(itemId);
    });
  }
  counterDisplay.innerHTML = `${cardsCounter(recipes)} Differnt options to choose!`;
};

export default displayCards;
