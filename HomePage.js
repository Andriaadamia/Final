import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Movies from '../components/Movies';
import '../App.css'; // ახალი CSS ფაილი

function HomePage({ movies }) {
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [groupedGenres, setGroupedGenres] = useState({});

  useEffect(() => {
    if (movies && Array.isArray(movies)) {
      const genres = {};
      movies.forEach(movie => {
        const title = movie.title || movie.name || 'Untitled';

        if (!title.toLowerCase().includes(search.toLowerCase())) return;

        const genreList =
          typeof movie.genre === 'string' && movie.genre.length > 0
            ? movie.genre.split(',').map(g => g.trim())
            : [''];

        genreList.forEach(genre => {
          if (!genres[genre]) genres[genre] = [];
          genres[genre].push(movie);
        });
      });

      setGroupedGenres(genres);
    }
  }, [movies, search]);

  return (
    <div className="home-main">
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {Object.keys(groupedGenres).map(genre => (
        <section key={genre} className="genre-section">
          <h2 className="genre-heading">{genre}</h2>
          <MovieList movies={groupedGenres[genre]} onSelectMovie={setSelectedMovie} />
        </section>
      ))}

      {selectedMovie && (
        <Movies movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default HomePage;
