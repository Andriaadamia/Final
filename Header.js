import React from 'react';

function Header({ user, onLogout, onNavigate, currentPage }) {
  console.log("Current Page:", currentPage); // დახმარებისთვის

  return (
    <header className="header">
      <h1 className="logo">🎬 MovieZone</h1>
      <nav>
        {!user ? (
          <>
            <button className="back-button" onClick={() => onNavigate('home')}>Home</button>
            <button className="back-button" onClick={() => onNavigate('login')}>Login</button>
            <button className="back-button" onClick={() => onNavigate('signup')}>Register</button>
          </>
        ) : (
          <div className="user-section">
            <div className="back-button">👤 {user}</div>

            {currentPage === 'favourites' && (
              <button
                className="back-button"
                onClick={() => onNavigate('home')}
                style={{ marginRight: '10px' }}  // ეს შეიძლება საჭირო იყოს spacing-ისთვის
              >
                ← Back to Movies
              </button>
            )}

            <button className="back-button" onClick={() => onNavigate('favourites')}>Favourites</button>
            <button className="back-button" onClick={onLogout}>Log out</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
