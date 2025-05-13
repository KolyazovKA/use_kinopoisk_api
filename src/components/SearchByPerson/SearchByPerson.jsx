import React, { useState } from 'react';
import { kinopoiskApi } from '../../api/kinopoiskApi';
import './SearchByPerson.css'; // Импорт файла стилей

export function SearchByPerson({ onSearch }) {
  const [personName, setPersonName] = useState('');
  const [personRole, setPersonRole] = useState('any');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNameChange = async (e) => {
    const value = e.target.value;
    setPersonName(value);

    if (value.length >= 3) {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 300));

        const fakeSuggestions = [
          { id: 1, name: `${value}`, photo: null }
        ];

        setSuggestions(fakeSuggestions);
      } catch (error) {
        console.error('Ошибка при загрузке подсказок:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (personName.trim().length > 0) {
      try {
        onSearch('');
        const response = await kinopoiskApi.searchByPerson(personName, personRole);

        setPersonName('');
        setSuggestions([]);
      } catch (error) {
        console.error('Ошибка при поиске по персоне:', error);
      }
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Поиск по актерам и режиссерам</h2>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={personName}
            onChange={handleNameChange}
            placeholder="Введите имя актера или режиссера"
            className="search-input"
          />

          {suggestions.length > 0 && (
            <div className="suggestions-list">
              {suggestions.map(person => (
                <div
                  key={person.id}
                  onClick={() => {
                    setPersonName(person.name);
                    setSuggestions([]);
                  }}
                  className="suggestion-item"
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="suggestion-photo"
                    />
                  ) : (
                    <div className="suggestion-photo-placeholder">
                      {person.name.charAt(0)}
                    </div>
                  )}
                  <span>{person.name}</span>
                </div>
              ))}
            </div>
          )}

          {loading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          )}
        </div>

        <select
          value={personRole}
          onChange={(e) => setPersonRole(e.target.value)}
          className="role-select"
        >
          <option value="any">Все</option>
          <option value="actor">Актер</option>
          <option value="director">Режиссер</option>
        </select>

        <button
          type="submit"
          disabled={personName.trim().length === 0}
          className="search-btn"
        >
          Искать
        </button>
      </form>
    </div>
  );
}
