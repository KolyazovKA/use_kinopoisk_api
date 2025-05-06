import { useState, useEffect } from 'react';
import { kinopoiskApi } from '../../api/kinopoiskApi';
import './Filters.css';

export function Filters({ onFilterChange, filters, onItemsPerPageChange, itemsPerPage }) {
  const [availableGenres, setAvailableGenres] = useState([]);
  const [availableCountries, setAvailableCountries] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [yearFrom, setYearFrom] = useState(filters.yearFrom);
  const [yearTo, setYearTo] = useState(filters.yearTo);
  const [ratingFrom, setRatingFrom] = useState(filters.ratingFrom);
  const [ratingTo, setRatingTo] = useState(filters.ratingTo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilterData = async () => {
      setLoading(true);
      try {
        const [genres, countries] = await Promise.all([
          kinopoiskApi.getGenres(),
          kinopoiskApi.getCountries()
        ]);
        setAvailableGenres(genres);
        setAvailableCountries(countries);
      } catch (error) {
        console.error('Ошибка загрузки фильтров:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilterData();
  }, []);

  const handleGenreChange = (genre) => {
    const current = [...filters.genres];
    onFilterChange({ genres: current.includes(genre) ? current.filter(g => g !== genre) : [...current, genre] });
  };

  const handleCountryChange = (country) => {
    const current = [...filters.countries];
    onFilterChange({ countries: current.includes(country) ? current.filter(c => c !== country) : [...current, country] });
  };

  const handleYearSubmit = () => onFilterChange({ yearFrom, yearTo });
  const handleRatingSubmit = () => onFilterChange({ ratingFrom, ratingTo });
  const handleSortChange = (e) => onFilterChange({ sortBy: e.target.value });
  const handleSortOrderChange = (e) => onFilterChange({ sortOrder: e.target.value });
  const handleItemsPerPageChange = (e) => onItemsPerPageChange(Number(e.target.value));
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const resetFilters = () => {
    setYearFrom('');
    setYearTo('');
    setRatingFrom('');
    setRatingTo('');
    onFilterChange({
      genres: [], countries: [], yearFrom: '', yearTo: '', ratingFrom: '', ratingTo: '', sortBy: 'votes.kp', sortOrder: 'desc'
    });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2>Фильтры</h2>
        <div className="filters-controls">
          <button onClick={resetFilters} className="btn-reset">Сбросить</button>
          <button onClick={toggleExpanded} className="btn-toggle">{isExpanded ? 'Свернуть' : 'Развернуть'}</button>
        </div>
      </div>

      <div className="filters-basic">
        <div className="filter-group">
          <label>Сортировать по:</label>
          <select value={filters.sortBy} onChange={handleSortChange}>
            <option value="rating.kp">Рейтинг КП</option>
            <option value="rating.imdb">Рейтинг IMDB</option>
            <option value="votes.kp">Популярность</option>
            <option value="year">Год</option>
            <option value="name">Название</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Порядок:</label>
          <select value={filters.sortOrder} onChange={handleSortOrderChange}>
            <option value="desc">По убыванию</option>
            <option value="asc">По возрастанию</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Элементов на странице:</label>
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            {[10,20,30,40].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      {isExpanded && (
        <div className="filters-advanced">
          <div className="filter-section">
            <h3>Год выпуска</h3>
            <div className="filter-range">
              <input type="number" placeholder="От" value={yearFrom} onChange={e => setYearFrom(e.target.value)} min="1900" max="2025" />
              <span>-</span>
              <input type="number" placeholder="До" value={yearTo} onChange={e => setYearTo(e.target.value)} min="1900" max="2025" />
              <button onClick={handleYearSubmit}>Применить</button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Рейтинг КП</h3>
            <div className="filter-range">
              <input type="number" placeholder="От" value={ratingFrom} onChange={e => setRatingFrom(e.target.value)} min="1" max="10" step="0.1" />
              <span>-</span>
              <input type="number" placeholder="До" value={ratingTo} onChange={e => setRatingTo(e.target.value)} min="1" max="10" step="0.1" />
              <button onClick={handleRatingSubmit}>Применить</button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Жанры</h3>
            {loading ? <p>Загрузка жанров...</p> : (
              <div className="filter-buttons">
                {availableGenres.map(genre => (
                  <button key={genre} onClick={() => handleGenreChange(genre)} className={filters.genres.includes(genre) ? 'btn-selected' : 'btn-unselected'}>
                    {genre}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <h3>Страны</h3>
            {loading ? <p>Загрузка стран...</p> : (
              <div className="filter-buttons scrollable">
                {availableCountries.map(country => (
                  <button key={country} onClick={() => handleCountryChange(country)} className={filters.countries.includes(country) ? 'btn-selected' : 'btn-unselected'}>
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
);
}