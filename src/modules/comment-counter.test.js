/*
 * @jest-environment jsdom
 */

import commentsCounter from './comment-counter.js';

describe('The commentsCounter should return the length of the array it takes', () => {
  test('Comments Counter', async () => {
    const count = commentsCounter([
      {
        username: 'Mahmoud',
        comment: 'Tasty!',
        creation_date: '2022-05-19',
      },
    ]);
    expect(count).toBe(1);
  });
});