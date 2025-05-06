import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.css';

export function MovieList({ movies, onViewDetails, favorites = [], onToggleFavorite }) {
  return (
    <div className="movie-list-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onViewDetails={onViewDetails}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
