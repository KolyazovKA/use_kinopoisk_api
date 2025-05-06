import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header/Header';
import { MovieList } from './components/MovieList/MovieList';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { Pagination } from './components/Pagination/Pagination';
import { Filters } from './components/Filters/Filters';
import { kinopoiskApi } from './api/kinopoiskApi';
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
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const filterParams = {};

      if (filters.genres.length > 0) {
        filterParams['genres.name'] = filters.genres.map(genre => `+${genre}`);
      }

      if (filters.countries.length > 0) {
        filterParams['countries.name'] = filters.countries.map(country => `+${country}`);
      }

      if (filters.yearFrom && filters.yearTo) {
        filterParams.year = `${filters.yearFrom}-${filters.yearTo}`;
      } else if (filters.yearFrom) {
        filterParams.year = `${filters.yearFrom}-`;
      } else if (filters.yearTo) {
        filterParams.year = `-${filters.yearTo}`;
      }

      if (filters.ratingFrom && filters.ratingTo) {
        filterParams['rating.kp'] = `${filters.ratingFrom}-${filters.ratingTo}`;
      } else if (filters.ratingFrom) {
        filterParams['rating.kp'] = `${filters.ratingFrom}-`;
      } else if (filters.ratingTo) {
        filterParams['rating.kp'] = `-${filters.ratingTo}`;
      }

      if (filters.sortBy) {
        filterParams.sortField = filters.sortBy;
        filterParams.sortType = filters.sortOrder || 'desc';
      }

      // делаем запрос
      const response = await kinopoiskApi.searchMovies({
        query: searchTerm,
        page: currentPage,
        limit: itemsPerPage,
        filters: filterParams
      });

      // обновляем
      setMovies(response.docs);
      setTotalPages(response.pages);
      setTotalResults(response.total);
      setError(null);
    }
    catch (err) {
      setError("Возникла ошибка при загрузке данных");
      setMovies([]);
      setTotalResults(0);
      setTotalPages(0);
    }
    finally {
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
    setFilters(prev => ({ ...prev, ...newFilters }));
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
      <Header onSearch={handleSearch} />

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