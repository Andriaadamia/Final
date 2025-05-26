import React from 'react';
import '../components/Movies.css';

function Movies({ movie, onClose }) {
  const handleAddToFavorites = () => {
    const existing = JSON.parse(localStorage.getItem('favorites')) || [];
    const updated = [...existing, movie];
    const unique = Array.from(new Map(updated.map(m => [m.id, m])).values());
    localStorage.setItem('favorites', JSON.stringify(unique));
    alert('Movie added to favorites!');
  };

  return (
    <div className="movie-overlay">
      <div className="movie-modal">
        <button onClick={onClose} className="close-btn">✖</button>
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.description || 'No description available.'}</p>
        <p className="movie-detail"><strong>🎬 Genre:</strong> {movie.genre || 'N/A'}</p>
        <p className="movie-detail"><strong>📅 Year:</strong> {movie.year || 'N/A'}</p>
        <button className="favorite-btn" onClick={handleAddToFavorites}>💖 Add to Favorites</button>
      </div>
    </div>
  );
}

export default Movies;
