import cardsCounter from './cards-counter.js';

const html = `<main id="container">
<div class="grid-container"></div>
</main>`;
document.body.innerHTML = html;

test('Cards Counter', async () => {
  const container = document.querySelector('.grid-container');
  for (let i = 0; i < 3; i += 1) {
    const card = document.createElement('ul');
    card.className = 'card';
    container.append(card);
  }
  const cards = document.querySelectorAll('.card');
  const counter = cardsCounter(cards);
  expect(counter).toBeDefined();
  expect(counter).toEqual(3);
});
