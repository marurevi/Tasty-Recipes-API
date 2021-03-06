const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = '3S0LGCd2AawS3pzx5laJ';

const addLike = async (itemId) => {
  let result;
  try {
    const res = await fetch(`${baseUrl}apps/${appId}/likes/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    result = await res.text();
  } catch (err) {
    return err;
  }
  return result;
};

const getLikesArr = async () => {
  let result;
  try {
    const res = await fetch(`${baseUrl}apps/${appId}/likes/`);
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

const addComment = async (itemId, username, comment) => {
  let result;
  try {
    const res = await fetch(`${baseUrl}apps/${appId}/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

const getComments = async (itemId) => {
  let result;
  try {
    const res = await fetch(`${baseUrl}apps/${appId}/comments/?item_id=${itemId}`);
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

export {
  addLike, getLikesArr, addComment, getComments,
};
