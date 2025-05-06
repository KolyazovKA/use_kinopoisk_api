import React, { useState, useEffect } from 'react';
import { kinopoiskApi } from '../../api/kinopoiskApi';
import { Seasons } from '../Seasons/Seasons';
import './MovieDetails.css';

export function MovieDetails({ movieId, onClose, isFavorite, onToggleFavorite }) {
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movieData = await kinopoiskApi.getMovieById(movieId);
        setMovie(movieData);

        if (movieData.isSeries || movieData.type === 'tv-series') {
          const seasonsData = await kinopoiskApi.getSeasons(movieId);
          setSeasons(seasonsData.items || []);
        }

        const videoData = await kinopoiskApi.getVideos(movieId);
        setTrailers(videoData);

        setError(null);
      } catch (err) {
        setError("Возникла ошибка при загрузке данных о фильме");
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  if (!movieId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div className="text-center p-8">Загрузка...</div>
        ) : error ? (
          <div className="text-center text-red p-8">{error}</div>
        ) : movie ? (
          <div>
            <div className="modal-header">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>{movie.name || movie.alternativeName}</h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => onToggleFavorite(movieId)}>
                    {isFavorite ? '❤️' : '🤍'}
                  </button>
                  <button onClick={onClose}>✕</button>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <img
                  src={movie.poster?.url || movie.poster?.previewUrl || '/api/placeholder/300/400'}
                  alt={movie.name}
                  className="poster"
                  onError={(e) => { e.target.src = '/api/placeholder/300/400'; }}
                />

                <div>
                  <p><em>{movie.alternativeName}</em></p>
                  <div style={{ margin: '0.5rem 0' }}>
                    {movie.rating?.kp > 0 && (
                      <span className={`rating-badge ${
                        movie.rating.kp >= 7 ? 'rating-green' :
                        movie.rating.kp >= 5 ? 'rating-yellow' : 'rating-red'
                      }`}>КП: {movie.rating.kp.toFixed(1)}</span>
                    )}
                    {movie.rating?.imdb > 0 && (
                      <span className={`rating-badge ${
                        movie.rating.imdb >= 7 ? 'rating-green' :
                        movie.rating.imdb >= 5 ? 'rating-yellow' : 'rating-red'
                      }`}>IMDB: {movie.rating.imdb.toFixed(1)}</span>
                    )}
                  </div>
                  <p><strong>Год:</strong> {movie.year}</p>
                  <p><strong>Жанр:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
                  <p><strong>Страна:</strong> {movie.countries?.map(c => c.name).join(', ')}</p>
                  <p><strong>Режиссёр:</strong> {movie.persons?.filter(p => p.profession === 'режиссеры').slice(0, 3).map(p => p.name).join(', ')}</p>
                  <p><strong>В ролях:</strong> {movie.persons?.filter(p => p.profession === 'актеры').slice(0, 5).map(p => p.name).join(', ')}</p>
                  <p><strong>Длительность:</strong> {movie.movieLength} мин.</p>
                  <p><strong>Возраст:</strong> {movie.ageRating}+</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="tabs">
              <div className={`tab ${activeTab === 'info' ? 'active' : ''}`} onClick={() => setActiveTab('info')}>О фильме</div>
              {trailers.length > 0 && <div className={`tab ${activeTab === 'trailers' ? 'active' : ''}`} onClick={() => setActiveTab('trailers')}>Трейлеры</div>}
              {seasons.length > 0 && <div className={`tab ${activeTab === 'seasons' ? 'active' : ''}`} onClick={() => setActiveTab('seasons')}>Сезоны</div>}
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
              {activeTab === 'info' && (
                <>
                  {movie.description && <><h3>Описание</h3><p>{movie.description}</p></>}
                  {movie.shortDescription && <><h3>Кратко</h3><p>{movie.shortDescription}</p></>}
                  {movie.slogan && <><h3>Слоган</h3><p><em>"{movie.slogan}"</em></p></>}
                  {movie.persons && (
                    <>
                      <h3>Актеры</h3>
                      <div className="actor-grid">
                        {movie.persons.filter(p => p.profession === 'актеры').slice(0, 12).map((p, i) => (
                          <div key={i} className="text-center">
                            <img src={p.photo || '/api/placeholder/100/150'} alt={p.name} className="actor-img" />
                            <p>{p.name}</p>
                            {p.enName && <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{p.enName}</p>}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}

              {activeTab === 'trailers' && (
                <>
                  <h3>Трейлеры</h3>
                  {trailers.map((trailer, i) => (
                    <iframe
                      key={i}
                      src={trailer.url.replace('watch?v=', 'embed/')}
                      frameBorder="0"
                      allowFullScreen
                      title={`Трейлер ${i}`}
                      style={{ width: '100%', height: '400px', marginBottom: '1rem', borderRadius: '8px' }}
                    />
                  ))}
                </>
              )}

              {activeTab === 'seasons' && <Seasons seasons={seasons} />}
            </div>
          </div>
        ) : (
          <div className="text-center p-8">Фильм не найден</div>
        )}
      </div>
    </div>
  );
}
