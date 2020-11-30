const CORS_URL = `https://cors-anywhere.herokuapp.com/`;
const URL = 'http://43.240.103.34/api.shadhin/api/search?keyword=valo';

export const trackList = async() => {
  const response = await fetch(CORS_URL + URL);
  const result = await response.json();

  return result.data;
};
