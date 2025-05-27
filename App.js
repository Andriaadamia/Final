import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import FavouritesPage from './components/FavouritesPage'; 
import './App.css';

const API_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';

const API_HEADERS = {
  'X-RapidAPI-Key': 'a911bfcbc1msh38a5a20cee3abdep1ba4b5jsn1dfcca6aac98',
  'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
};

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch(API_URL, { headers: API_HEADERS })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setMovies(data);
          } else if (data.results) {
            setMovies(data.results);
          } else {
            setMovies([]);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setMovies([]);
          setLoading(false);
        });
    } else {
      setMovies([]);
    }
  }, [user]);

  const handleLogin = (email) => {
    localStorage.setItem('user', email);
    setUser(email);
    setPage('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser('');
    setPage('home');
  };

  const handleSignup = (email, password) => {
    localStorage.setItem('registeredUserEmail', email);
    localStorage.setItem('registeredUserPassword', password);
    alert('Registration successful! Please sign in.');
    setPage('login');
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} onNavigate={setPage} />

      {!user && page === 'home' && (
        <div className="welcome">
          <h2>Welcome to MovieZone</h2>
        </div>
      )}

      {!user && page === 'login' && <LoginPage onLogin={handleLogin} />}
      {!user && page === 'signup' && <SignupPage onSignup={handleSignup} />}

      {user && page === 'home' && (
        loading ? (
          <div className="loading">ფილმების ჩატვირთვა...</div>
        ) : (
          <HomePage movies={movies} />
        )
      )}

      {user && page === 'favourites' && (
        <FavouritesPage onNavigate={setPage} />
      )}

      <Footer />
    </div>
  );
}

export default App;
