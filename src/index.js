import './style.css';
import displayCards from './modules/displayData.js';
import getRecipes from './modules/tasty-api.js';
import { hidePopup } from './modules/popup.js';

const closeIcon = document.querySelector('.close-icon');

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
