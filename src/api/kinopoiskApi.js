// kinopoiskApi.js
// const API_KEY = process.env.REACT_APP_KINOPOISK_API_KEY;
const API_KEY = "59DEZ6G-CZZMHSE-KWZB29B-B9W2WTP"
const API_URL = 'https://api.kinopoisk.dev/v1.4';

const defaultHeaders = {
  accept: 'application/json',
  'X-API-KEY': API_KEY,
};

async function fetchWithAuth(endpoint, { method = 'GET', params = {}, body = null } = {}) {
  let url = `${API_URL}/${endpoint}`;

  if (method === 'GET' && Object.keys(params).length) {
    const qp = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val != null && val !== '') qp.append(key, val);
    });
    url += `?${qp.toString()}`;
  }

  const res = await fetch(url, {
    method,
    headers: defaultHeaders,
    body: method === 'POST' && body ? JSON.stringify(body) : null,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kinopoisk API error ${res.status}: ${text}`);
  }
  return res.json();
}

export const kinopoiskApi = {
  /**
   * GET /movie с поддержкой всех фильтров через URL
   * @param {Object} options
   * @param {number} options.page
   * @param {number} options.limit
   * @param {string} options.sortField
   * @param {'asc'|'desc'} options.sortOrder
   * @param {number} [options.yearFrom]
   * @param {number} [options.yearTo]
   * @param {number} [options.ratingFrom]
   * @param {number} [options.ratingTo]
   * @param {string} [options.country]  — точное имя страны, например 'Россия'
   */
  async discoverMoviesGet({
    page = 1,
    limit = 40,
    sortField = '',
    sortOrder = 'desc',
    yearFrom,
    yearTo,
    ratingFrom,
    ratingTo,
    country,
  } = {}) {
    // строим параметры
    const params = {
      page,
      limit,
      sortField,
      sortType: sortOrder === 'desc' ? -1 : 1,
    };

    // диапазон годов
    if (yearFrom != null || yearTo != null) {
      const from = yearFrom != null ? yearFrom : '';
      const to   = yearTo   != null ? yearTo   : '';
      params.year = `${from}-${to}`;
    }

    // диапазон рейтинга КП
    if (ratingFrom != null || ratingTo != null) {
      const from = ratingFrom != null ? ratingFrom : '';
      const to   = ratingTo   != null ? ratingTo   : '';
      params['rating.kp'] = `${from}-${to}`;
    }

    // страна
    if (country) {
      params['countries.name'] = country;
    }

    return fetchWithAuth('movie', { method: 'GET', params });
  },

  // остальное без изменений...
  async searchMovies({ query = '', page = 1, limit = 10, yearFrom, yearTo, sortField, sortOrder = 'desc' } = {}) {
    const params = { query, page, limit };
    if (yearFrom != null) params.yearFrom = yearFrom;
    if (yearTo   != null) params.yearTo   = yearTo;
    if (sortField) {
      params.sortField = sortField;
      params.sortType  = sortOrder === 'desc' ? -1 : 1;
    }
    return fetchWithAuth('movie/search', { method: 'GET', params });
  },

  async discoverMovies({ filter = {}, sort = [], page = 1, limit = 10 } = {}) {
    const body = { filter, sort, page, limit };
    return fetchWithAuth('movie', { method: 'POST', body });
  },

  async getMovieById(id) {
    return fetchWithAuth(`movie/${id}`, { method: 'GET' });
  },

  async getGenres() {
    const res = await fetchWithAuth('movie/possible-values-by-field', {
      method: 'GET',
      params: { field: 'genres' },
    });
    return res.values || [];
  },

  async getCountries() {
    const res = await fetchWithAuth('movie/possible-values-by-field', {
      method: 'GET',
      params: { field: 'countries' },
    });
    return res.values || [];
  },

  async getSeasons(movieId, page = 1, limit = 10) {
    return fetchWithAuth(`movie/${movieId}/season`, {
      method: 'GET',
      params: { page, limit },
    });
  },

  async getVideos(movieId) {
    const movie = await this.getMovieById(movieId);
    return movie.videos?.trailers || [];
  },

  async searchByPerson({ name, profession = 'actor', page = 1, limit = 10 } = {}) {
    const profMap = { actor: 'актер', director: 'режиссер' };
    const filter = {
      'persons.name':       name,
      'persons.profession': profMap[profession] || profession,
    };
    return this.discoverMovies({ filter, page, limit });
  },
};
