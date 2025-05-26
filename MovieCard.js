import React from 'react';
import '../components/MovieCard.css'; // ვამატებთ CSS ფაილს

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-year">{movie.year}</p>
    </div>
  );
}

export default MovieCard;
