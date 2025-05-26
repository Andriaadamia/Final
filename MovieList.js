import React, { useState } from 'react';
import '../components/MovieList.css'; // დაამატე ეს სტრიქონი

function MovieList({ movies, onSelectMovie }) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="movie-list">
        {currentMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-text">🎬 Genre: {movie.genre || 'N/A'}</p>
            <p className="movie-text">⭐ Rating: {movie.rating}</p>
            <button
              onClick={() => onSelectMovie(movie)}
              className="view-button"
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >
              View Detail
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          onClick={goToPrevPage} 
          disabled={currentPage === 1} 
          className="page-button"
          style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
        >
          Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={goToNextPage} 
          disabled={currentPage === totalPages} 
          className="page-button"
          style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default MovieList;
