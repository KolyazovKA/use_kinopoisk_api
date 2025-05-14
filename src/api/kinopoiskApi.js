const API_KEY = process.env.REACT_APP_KINOPOISK_API_KEY;
const API_URL = 'https://api.kinopoisk.dev/v1.4';

// const url = 'https://api.kinopoisk.dev/v1.4/season?page=1&limit=10';
// const options = {
//   method: 'GET',
//   headers: {accept: 'application/json', 'X-API-KEY': '463BHN7-HD943JJ-JHQ146A-STDV58C'}
// };
//
// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

export const kinopoiskApi = {
    findMovies: async function ({query = '', filters = {}, sortField, sortType, page = 1, limit = 10}) {
        // Создаем объект для параметров запроса
        const params = {page, limit};

        // Добавляем параметр поиска, если он задан
        if (query && query.trim() !== '') {
            params.query = query;
        }

        // Добавляем все фильтры из объекта filters
        Object.entries(filters).forEach(([key, value]) => {
            params[key] = value;
        });

        // Добавляем параметры сортировки
        if (sortField) {
            params.sortField = sortField;
            params.sortType = sortType;
        }

        // Выбираем правильный эндпоинт в зависимости от наличия поискового запроса
        const endpoint = query && query.trim() !== '' ? 'movie/search' : 'movie';

        console.log(`Запрос к API: ${endpoint}`, params);

        // Выполняем запрос к API
        return this.fetchWithAuth(endpoint, {method: 'GET', params});
    },

    // универсальный метод GET или POST
    async fetchWithAuth(endpoint, {method = 'GET', params = {}, body = null} = {}) {
        let url = `${API_URL}/${endpoint}`;
        const headers = {
            'accept': 'application/json',
            'X-API-KEY': API_KEY,
        };

        if (method === 'GET' && Object.keys(params).length) {
            // Улучшенное формирование параметров запроса
            const queryParams = new URLSearchParams();

            // Обрабатываем каждый параметр
            Object.entries(params).forEach(([key, value]) => {
                // Если значение является массивом, добавляем каждый элемент отдельно
                if (Array.isArray(value)) {
                    value.forEach(item => queryParams.append(key, item));
                } else {
                    queryParams.append(key, value);
                }
            });

            url += `?${queryParams.toString()}`;
        }

        console.log('Итоговый URL:', url);

        const response = await fetch(url, {
            method,
            headers,
            body: method === 'POST' && body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', errorText);
            throw new Error(`API error: ${response.status} ${errorText}`);
        }

        return response.json();
    },

    async searchMovies({query, page = 1, limit = 10, sortField, sortType}) {
        const params = {query, page, limit};

        if (sortField) {
            params.sortField = sortField;
            params.sortType = sortType === 'desc' ? -1 : 1;
        }

        return this.fetchWithAuth('movie/search', {method: 'GET', params});
    },

    async discoverMovies({filters = [], sort = [], page = 1, limit = 10}) {
        // filters: [{ field: 'rating.kp', value: '7-10' }, ...]
        // sort:    [{ field: 'votes.kp', order: -1 }, ...]
        const body = {filter: filters, sort, page, limit};
        return this.fetchWithAuth('movie', {method: 'POST', body});
    },

    async getMovieById(id) {
        return this.fetchWithAuth(`movie/${id}`, {method: 'GET'});
    },

    async getGenres() {
        const res = await this.fetchWithAuth('movie/possible-values-by-field', {
            method: 'GET',
            params: {field: 'genres'},
        });
        return res.values || [];
    },

    async getCountries() {
        const res = await this.fetchWithAuth('movie/possible-values-by-field', {
            method: 'GET',
            params: {field: 'countries'},
        });
        return res.values || [];
    },

    async getSeasons(movieId) {
        return this.fetchWithAuth(`movie/${movieId}/season`, {method: 'GET'});
    },

    async getVideos(movieId) {
        const movie = await this.getMovieById(movieId);
        return movie.videos?.trailers || [];
    },

    async searchByPerson({name, profession, page = 1, limit = 10}) {
        const profMap = {
            actor: 'актер',
            director: 'режиссер',
        };
        const filters = [
            {field: 'persons.name', value: name},
            {field: 'persons.profession', value: profMap[profession] || name},
        ];
        return this.discoverMovies({filters, page, limit});
    },
};
