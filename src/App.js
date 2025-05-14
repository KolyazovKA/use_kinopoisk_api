import {useState, useEffect, useRef} from 'react';
import {Header} from './components/Header/Header';
import {MovieList} from './components/MovieList/MovieList';
import {MovieDetails} from './components/MovieDetails/MovieDetails';
import {Pagination} from './components/Pagination/Pagination';
import {Filters} from './components/Filters/Filters';
import {kinopoiskApi} from './api/kinopoiskApi';
import './index.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const [filters, setFilters] = useState({
        genres: [],
        countries: [],
        yearFrom: '',
        yearTo: '',
        ratingFrom: '',
        ratingTo: '',
        sortBy: 'rating.kp',
        sortOrder: 'desc'
    });

    // прокрутка страницы
    const topRef = useRef(null);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            try {
                setFavorites(JSON.parse(savedFavorites));
            } catch (e) {
                console.error('Ошибка при загрузке избранного:', e);
            }
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    useEffect(() => {
        if (!showFavorites) {
            fetchMovies();
        }
    }, [searchTerm, currentPage, filters, showFavorites, itemsPerPage]);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [currentPage]);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            // Создаем объект для фильтров в формате, соответствующем API
            const filterParams = {};

            // Формируем запрос для поиска по API v1.4
            // В соответствии с документацией, для фильтрации нужно использовать
            // формат field=value или field=value1-value2 для диапазонов

            // Жанры: используем формат genres.name=комедия для каждого жанра
            if (filters.genres.length > 0) {
                // Добавляем каждый жанр как отдельный параметр с оператором "И" (используя &)
                filters.genres.forEach((genre, index) => {
                    filterParams[`genres.name`] = genre;
                });
            }

            // Страны: аналогично жанрам
            if (filters.countries.length > 0) {
                filters.countries.forEach((country, index) => {
                    filterParams[`countries.name`] = country;
                });
            }

            // Год: в формате year=1990-2020
            if (filters.yearFrom || filters.yearTo) {
                let yearRange = '';
                if (filters.yearFrom) yearRange += filters.yearFrom;
                yearRange += '-';
                if (filters.yearTo) yearRange += filters.yearTo;
                filterParams['year'] = yearRange;
            }

            // Рейтинг: в формате rating.kp=7-10
            if (filters.ratingFrom || filters.ratingTo) {
                let ratingRange = '';
                if (filters.ratingFrom) ratingRange += filters.ratingFrom;
                ratingRange += '-';
                if (filters.ratingTo) ratingRange += filters.ratingTo;
                filterParams['rating.kp'] = ratingRange;
            }

            // Сортировка: документация показывает, что нужно использовать
            // sortField и sortType (-1 для возрастания, 1 для убывания)
            // Обратите внимание на изменение в логике:
            // 'desc' в UI соответствует -1 в API (убывание)
            // 'asc' в UI соответствует 1 в API (возрастание)
            const sortOrder = filters.sortOrder === 'desc' ? -1 : 1;

            console.log('Отправка запроса к API с параметрами:', {
                searchTerm,
                filterParams,
                sortField: filters.sortBy,
                sortType: sortOrder,
                page: currentPage,
                limit: itemsPerPage
            });

            // Вызываем обновленный метод API для поиска фильмов
            const response = await kinopoiskApi.findMovies({
                query: searchTerm,
                filters: filterParams,
                sortField: filters.sortBy,
                sortType: sortOrder,
                page: currentPage,
                limit: itemsPerPage
            });

            // Обновляем состояние
            setMovies(response.docs);
            setTotalPages(response.pages);
            setTotalResults(response.total);
            setError(null);
        } catch (err) {
            console.error("Ошибка API:", err);
            setError("Возникла ошибка при загрузке данных");
            setMovies([]);
            setTotalResults(0);
            setTotalPages(0);
        } finally {
            setLoading(false);
        }
    };

    const fetchFavoriteMovies = async () => {
        setLoading(true);
        try {
            const favoriteMoviesDetails = await Promise.all(
                favorites.map(movieId => kinopoiskApi.getMovieById(movieId))
            );

            setMovies(favoriteMoviesDetails);
            setError(null);
            setTotalResults(favoriteMoviesDetails.length);
            setTotalPages(1);
        } catch (err) {
            setError("Возникла ошибка при загрузке избранных фильмов или кончились запросы(");
            setMovies([]);
            setTotalResults(0);
            setTotalPages(0);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (query) => {
        setSearchTerm(query);
        setCurrentPage(1);
        setShowFavorites(false);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({...prev, ...newFilters}));
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleViewDetails = (movieId) => {
        setSelectedMovieId(movieId);
    };

    const handleCloseDetails = () => {
        setSelectedMovieId(null);
    };

    const toggleFavorite = (movieId) => {
        if (favorites.includes(movieId)) {
            setFavorites(favorites.filter(id => id !== movieId));
        } else {
            setFavorites([...favorites, movieId]);
        }
    };

    const handleToggleFavorites = () => {
        if (showFavorites) {
            setShowFavorites(false);
        } else {
            setShowFavorites(true);
            fetchFavoriteMovies();
        }
    };

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    return (
        <div className="app-container">
            <div ref={topRef}></div>
            <Header onSearch={handleSearch}/>

            <div className="favorites-toggle">
                <button
                    onClick={handleToggleFavorites}
                    className={`favorites-button ${showFavorites ? 'active' : ''}`}
                >
                    {showFavorites ? 'Вернуться к поиску' : 'Показать избранное'}
                </button>
            </div>

            {!showFavorites && (
                <Filters
                    onFilterChange={handleFilterChange}
                    filters={filters}
                    onItemsPerPageChange={handleItemsPerPageChange}
                    itemsPerPage={itemsPerPage}
                />
            )}

            {loading ? (
                <div className="loading-indicator">
                    <div className="spinner"></div>
                    <p>Загрузка...</p>
                </div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : movies.length > 0 ? (
                <div>
                    <MovieList
                        movies={movies}
                        onViewDetails={handleViewDetails}
                        favorites={favorites}
                        onToggleFavorite={toggleFavorite}
                    />

                    {!showFavorites && totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            ) : (
                <div className="no-movies-message">
                    {showFavorites
                        ? 'У вас пока нет избранных фильмов'
                        : 'Фильмы не найдены. Попробуйте изменить запрос или фильтры'}
                </div>
            )}

            {selectedMovieId && (
                <MovieDetails
                    movieId={selectedMovieId}
                    onClose={handleCloseDetails}
                    isFavorite={favorites.includes(selectedMovieId)}
                    onToggleFavorite={toggleFavorite}
                />
            )}
        </div>
    );
}

export default App;