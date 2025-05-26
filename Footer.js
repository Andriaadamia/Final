import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MovieZone. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
