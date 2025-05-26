import React, { useEffect, useState } from 'react';
import '../App.css';



function FavouritesPage({ onNavigate }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((movie) => movie.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="favourites-container">
      <button
        className="back-button"
        onClick={() => onNavigate('home')}
      >
        ⬅ Back to Movies
      </button>



      {favorites.length === 0 ? (
        <p className="no-favourites">No favorite movies yet.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <div key={movie.id} className="movie-card-wrapper">
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3 className="movie-title">{movie.title}</h3>
              <button
                className="back-button"
                onClick={() => removeFromFavorites(movie.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouritesPage;
