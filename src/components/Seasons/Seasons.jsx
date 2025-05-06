import React, { useState } from 'react';
import './Seasons.css'; // Импорт файла стилей

export function Seasons({ seasons }) {
  const [activeSeason, setActiveSeason] = useState(seasons[0]?.number || 1);

  if (!seasons || seasons.length === 0) {
    return <div className="no-seasons">Информация о сезонах недоступна</div>;
  }

  const currentSeason = seasons.find(season => season.number === activeSeason);

  return (
    <div>
      <h3 className="seasons-title">Сезоны и эпизоды</h3>

      <div className="seasons-selector">
        {seasons.map(season => (
          <button
            key={season.number}
            onClick={() => setActiveSeason(season.number)}
            className={`season-button ${
              activeSeason === season.number ? 'active' : ''
            }`}
          >
            Сезон {season.number}
          </button>
        ))}
      </div>

      {currentSeason && (
        <div>
          {currentSeason.episodesCount > 0 && (
            <p className="episodes-count">
              <strong>Количество серий:</strong> {currentSeason.episodesCount}
            </p>
          )}

          {currentSeason.episodes && currentSeason.episodes.length > 0 ? (
            <div className="episodes-list">
              {currentSeason.episodes.map(episode => (
                <div key={episode.number} className="episode-item">
                  <h4 className="episode-title">
                    {episode.number}. {episode.name || `Эпизод ${episode.number}`}
                  </h4>
                  {episode.enName && <p className="episode-enname">{episode.enName}</p>}
                  {episode.description && <p className="episode-description">{episode.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p>Информация об эпизодах недоступна</p>
          )}
        </div>
      )}
    </div>
  );
}
