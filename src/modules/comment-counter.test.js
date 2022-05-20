/*
 * @jest-environment jsdom
 */

// import commentsCounter from './comment-counter.js';
import { getComments, addComment } from './involvement-api.js';

describe('The counter should increase by one after adding a comment', () => {
  test('Add comment', () => {
    const initialCommentsLength = getComments(3164);
    console.log(initialCommentsLength);
    addComment();
    const updatedCommentsLength = getComments(3164).length;
    expect(updatedCommentsLength).toBe(initialCommentsLength + 1);
  });
});