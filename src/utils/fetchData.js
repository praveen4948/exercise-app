export const headers = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2d0c1809bbmshd6786b9c3474ec1p188ae3jsn79c298425b02',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeHeaders = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'db8fdcf037msh9e2d0957bfbb48ep174baajsneb5f4c93f1a2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
}