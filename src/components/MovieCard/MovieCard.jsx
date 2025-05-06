import React from 'react';
import './MovieCard.css';

export function MovieCard({ movie, onViewDetails, isFavorite, onToggleFavorite }) {
  const posterUrl = movie.poster?.url || movie.poster?.previewUrl || '/api/placeholder/300/400';

  const getRatingClass = (rating) => {
    if (rating >= 7) return 'rating-green';
    if (rating >= 5) return 'rating-yellow';
    return 'rating-red';
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'movie': return 'Фильм';
      case 'tv-series': return 'Сериал';
      case 'cartoon': return 'Мультфильм';
      case 'anime': return 'Аниме';
      default: return type;
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-image-wrapper">
        <img
          src={posterUrl}
          alt={movie.name || movie.alternativeName || 'Фильм'}
          className="movie-poster"
          onError={(e) => {
            e.target.src = '/api/placeholder/300/400';
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie.id);
          }}
          className="favorite-button"
          aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>

        {movie.rating?.kp > 0 && (
          <div className={`rating-badge ${getRatingClass(movie.rating.kp)}`}>
            {movie.rating.kp.toFixed(1)}
          </div>
        )}

        {movie.type && (
          <div className="type-label">{getTypeLabel(movie.type)}</div>
        )}
      </div>

      <div className="movie-content">
        <h2 className="movie-title">{movie.name || movie.alternativeName}</h2>

        <div className="movie-info">
          {movie.year && <span>{movie.year}, </span>}
          {movie.genres?.length > 0 && (
            <span>{movie.genres.slice(0, 2).map(g => g.name).join(', ')}</span>
          )}
        </div>

        <button
          onClick={() => onViewDetails(movie.id)}
          className="details-button"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}
