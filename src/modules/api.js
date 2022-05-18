const baseUrl = 'https://tasty.p.rapidapi.com/recipes/list';

const options = {
  method: 'GET',
  params: { from: '0', size: '12', q: '' },
  headers: {
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    'X-RapidAPI-Key': '0ad5922801msh51e87bd70a9e20cp10fc6fjsn6f62ab061806',
  },
};

const getRecipes = async () => {
  let result;
  try {
    const res = await fetch(baseUrl, options);
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result.results;
};

export default getRecipes;
