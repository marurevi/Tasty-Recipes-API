import './style.css';
import displayCards from './modules/displayData.js';
import getRecipes from './modules/tasty-api.js';
import { addComment } from './modules/involvement-api.js';
import { hidePopup } from './modules/popup.js';

const closeIcon = document.querySelector('.close-icon');
const commentForm = document.querySelector('.comment-form');
const nameInput = document.querySelector('.name-input');
const commentInput = document.querySelector('.comment-input');

let recipesArr = [];

if (localStorage.getItem('recipes')) {
  recipesArr = JSON.parse(localStorage.getItem('recipes'));
  displayCards(recipesArr);
} else {
  const createRecipes = async () => {
    const recipes = await getRecipes();
    localStorage.setItem('recipes', JSON.stringify(recipes));
    recipesArr = JSON.parse(localStorage.getItem('recipes'));
    displayCards(recipesArr);
  };
  createRecipes();
}

closeIcon.addEventListener('click', () => {
  hidePopup();
});

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await addComment(nameInput.value.trim(), commentInput.value.trim());
  nameInput.value = '';
  commentInput.value = '';
});
