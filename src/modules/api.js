const baseUrl = 'https://tasty.p.rapidapi.com/recipes/list';

const options = {
  method: 'GET',
  params: { from: '0', size: '12', q: '' },
  headers: {
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    'X-RapidAPI-Key': '37164b7c45mshcc00bf1093d3c29p1f7efajsnb7dc22766d81',
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
