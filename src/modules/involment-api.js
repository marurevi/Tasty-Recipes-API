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

const getLikes = async (itemId) => {
  const arrayOfLikes = await getLikesArr();

  let nroLikes;
  for (let object = 0; object < arrayOfLikes.length; object += 1) {
    if (object.item_id === itemId) {
      nroLikes = object.likes;
    } else {
      nroLikes = 0;
    }
  }
  return nroLikes;
};

export { addLike, getLikes };