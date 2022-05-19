import { addComment, getComments } from './involvement-api.js';

const overlaySection = document.querySelector('.overlay');
const popupThumpnail = document.querySelector('.thumbnail');
const recipeTitle = document.querySelector('.recipe-title');
const popupDesc = document.querySelector('.popup-desc');
const commentsList = document.querySelector('.comments-list');
const footerSection = document.querySelector('.footer');
const commentForm = document.querySelector('.comment-form');
const nameInput = document.querySelector('.name-input');
const commentInput = document.querySelector('.comment-input');
let id;

const loadComments = async (recipeId) => {
  commentsList.innerHTML = null;
  const comments = await getComments(recipeId);
  for (let i = 0; i < comments.length; i += 1) {
    const commentItem = document.createElement('li');
    commentItem.innerHTML = `<p class="comment-item">
    ${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}
    </p>`;
    commentsList.append(commentItem);
  }
};

const showPopup = (recipe, recipeId) => {
  id = recipeId;
  footerSection.classList.add('hidden');
  overlaySection.style.visibility = 'visible';
  recipeTitle.textContent = recipe.name;
  popupThumpnail.style.backgroundImage = `url(${recipe.thumbnail_url})`;
  popupDesc.innerHTML = recipe.description;
  loadComments(recipeId);
};

const hidePopup = () => {
  overlaySection.style.visibility = 'hidden';
  footerSection.classList.remove('hidden');
};

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await addComment(id, nameInput.value.trim(), commentInput.value.trim());
  nameInput.value = '';
  commentInput.value = '';
  loadComments(id);
});

export { showPopup, hidePopup };