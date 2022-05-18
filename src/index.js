import './style.css';
import getRecipes from './modules/api.js';
import { hidePopup } from './modules/popup.js';

const closeIcon = document.querySelector('.close-icon');

let recipesArr = [];

if (localStorage.getItem('recipes')) {
  recipesArr = JSON.parse(localStorage.getItem('recipes'));
  console.log(recipesArr);
} else {
  const createRecipes = async () => {
    const recipes = await getRecipes();
    localStorage.setItem('recipes', JSON.stringify(recipes));
    recipesArr = JSON.parse(localStorage.getItem('recipes'));
  };
  createRecipes();
}

closeIcon.addEventListener('click', () => {
  hidePopup();
});