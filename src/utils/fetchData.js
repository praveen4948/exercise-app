export const headers = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'db8fdcf037msh9e2d0957bfbb48ep174baajsneb5f4c93f1a2',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
}