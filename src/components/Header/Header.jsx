import React, { useState } from 'react';
import { SearchByPerson } from '../SearchByPerson/SearchByPerson';
import './Header.css';

export function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [showPersonSearch, setShowPersonSearch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim().length > 0) {
      onSearch(query);
    }
  };

  const togglePersonSearch = () => {
    setShowPersonSearch(!showPersonSearch);
  };

  return (
    <header className="header">
      <h1 className="header-title">Каталог фильмов Кинопоиска</h1>

      <div className="header-controls">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск фильмов и сериалов..."
            className="search-input"
          />
          <button type="submit" className="search-button">Поиск</button>
        </form>

        <button
          onClick={togglePersonSearch}
          className={`person-toggle ${showPersonSearch ? 'active' : ''}`}
        >
          {showPersonSearch ? 'Скрыть поиск по людям' : 'Поиск по актерам/режиссерам'}
        </button>
      </div>

      {showPersonSearch && <SearchByPerson onSearch={onSearch} />}
    </header>
  );
}