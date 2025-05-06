const url = 'https://api.kinopoisk.dev/v1.4/season?page=1&limit=10';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': '463BHN7-HD943JJ-JHQ146A-STDV58C'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));