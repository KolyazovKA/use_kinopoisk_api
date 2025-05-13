// Filters.jsx
import { useState, useEffect } from 'react';
import { kinopoiskApi } from '../../api/kinopoiskApi';
import './Filters.css';

export function Filters({
  initialFilters = {},
  onFilterChange,
  itemsPerPage,
  onItemsPerPageChange,
}) {
  // Локальное состояние копирует initialFilters и itemsPerPage
  const [filters, setFilters] = useState({
    page: 1,
    limit: itemsPerPage,
    sortField: initialFilters.sortField || '',
    sortOrder: initialFilters.sortOrder || 'desc',
    yearFrom: initialFilters.yearFrom ?? '',
    yearTo:   initialFilters.yearTo   ?? '',
    ratingFrom: initialFilters.ratingFrom ?? '',
    ratingTo:   initialFilters.ratingTo   ?? '',
    country: initialFilters.country || '',
  });
  const [isExpanded, setIsExpanded] = useState(false);

  // При изменении itemsPerPage синхронизируем фильтры и вызываем onItemsPerPageChange
  useEffect(() => {
    setFilters(f => ({ ...f, limit: itemsPerPage }));
    setFilters(f => ({ ...f, page: 1 })); // сбрасываем на первую страницу
  }, [itemsPerPage]);

  // Хелпер для обновления одного поля и вызова onFilterChange
  const updateFilter = (changes) => {
    setFilters(prev => {
      const updated = { ...prev, ...changes, page: 1 }; // всегда на 1-й странице
      // вызываем родителя
      onFilterChange({
        page: updated.page,
        limit: updated.limit,
        sortField: updated.sortField,
        sortOrder: updated.sortOrder,
        yearFrom: updated.yearFrom !== '' ? Number(updated.yearFrom) : undefined,
        yearTo:   updated.yearTo   !== '' ? Number(updated.yearTo)   : undefined,
        ratingFrom: updated.ratingFrom !== '' ? Number(updated.ratingFrom) : undefined,
        ratingTo:   updated.ratingTo   !== '' ? Number(updated.ratingTo)   : undefined,
        country: updated.country || undefined,
      });
      return updated;
    });
  };

  // Сброс всех полей
  const resetAll = () => {
    setFilters({
      page: 1,
      limit: itemsPerPage,
      sortField: '',
      sortOrder: 'desc',
      yearFrom: '',
      yearTo:   '',
      ratingFrom: '',
      ratingTo:   '',
      country: '',
    });
    onFilterChange({
      page: 1,
      limit: itemsPerPage,
      sortField: '',
      sortOrder: 'desc',
      // все остальные undefined
    });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2>Фильтры</h2>
        <div className="filters-controls">
          <button className="btn-reset" onClick={resetAll}>
            Сбросить
          </button>
          <button className="btn-toggle" onClick={() => setIsExpanded(x => !x)}>
            {isExpanded ? 'Свернуть' : 'Развернуть'}
          </button>
        </div>
      </div>

      <div className="filters-basic">
        <div className="filter-group">
          <label>Сортировать по:</label>
          <select
            value={filters.sortField}
            onChange={e => updateFilter({ sortField: e.target.value })}
          >
            <option value="">Без сортировки</option>
            <option value="rating.kp">Рейтинг КП</option>
            <option value="rating.imdb">Рейтинг IMDB</option>
            <option value="votes.kp">Популярность</option>
            <option value="year">Год</option>
            <option value="name">Название</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Порядок:</label>
          <select
            value={filters.sortOrder}
            onChange={e => updateFilter({ sortOrder: e.target.value })}
          >
            <option value="desc">По убыванию</option>
            <option value="asc">По возрастанию</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Элементов на странице:</label>
          <select
            value={itemsPerPage}
            onChange={e => onItemsPerPageChange(Number(e.target.value))}
          >
            {[10, 20, 30, 40].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {isExpanded && (
        <div className="filters-advanced">
          <div className="filter-section">
            <h3>Год выпуска</h3>
            <div className="filter-range">
              <input
                type="number"
                placeholder="От"
                min="1900" max={new Date().getFullYear()}
                value={filters.yearFrom}
                onChange={e => setFilters(f => ({ ...f, yearFrom: e.target.value }))}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="До"
                min="1900" max={new Date().getFullYear()}
                value={filters.yearTo}
                onChange={e => setFilters(f => ({ ...f, yearTo: e.target.value }))}
              />
              <button
                onClick={() => updateFilter({
                  yearFrom: filters.yearFrom,
                  yearTo:   filters.yearTo
                })}
              >
                Применить
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Рейтинг КП</h3>
            <div className="filter-range">
              <input
                type="number"
                placeholder="От"
                min="1" max="10" step="0.1"
                value={filters.ratingFrom}
                onChange={e => setFilters(f => ({ ...f, ratingFrom: e.target.value }))}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="До"
                min="1" max="10" step="0.1"
                value={filters.ratingTo}
                onChange={e => setFilters(f => ({ ...f, ratingTo: e.target.value }))}
              />
              <button
                onClick={() => updateFilter({
                  ratingFrom: filters.ratingFrom,
                  ratingTo:   filters.ratingTo
                })}
              >
                Применить
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Страна</h3>
            <input
              type="text"
              placeholder="Название страны"
              value={filters.country}
              onChange={e => updateFilter({ country: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
}
