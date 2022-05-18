const container = document.getElementById('container');

const displayCards = (recipes) => {
  for (let i = 0; i < recipes.length; i += 1) {
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
