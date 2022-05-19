import { getLikesArr } from './involvement-api.js';
import { showPopup } from './popup.js';

const container = document.querySelector('.grid-container');

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
    <li class="text2"><button type="button" class="likes">.....</button><br>Likes ${nroLikes}</li>
    <button type= "button" class= "comment" id="${i}">Comment</button>`;
    card.className = 'card';
    container.append(card);
    const commentBtn = document.getElementById(`${i}`);
    commentBtn.addEventListener('click', () => {
      showPopup(recipes[i], recipes[i].id);
    });
  }
};

export default displayCards;
