const overlaySection = document.querySelector('.overlay');
const popupThumpnail = document.querySelector('.thumbnail');
const recipeTitle = document.querySelector('.recipe-title');
const popupDesc = document.querySelector('.popup-desc');
const footerSection = document.querySelector('.footer');

const showPopup = async (recipe) => {
  footerSection.classList.add('hidden');
  overlaySection.style.visibility = 'visible';
  recipeTitle.textContent = recipe.name;
  popupThumpnail.style.backgroundImage = `url(${recipe.thumbnail_url})`;
  popupDesc.innerHTML = recipe.description;
};

const hidePopup = () => {
  overlaySection.style.visibility = 'hidden';
  footerSection.classList.remove('hidden');
};

export { showPopup, hidePopup };