// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './css/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        MovieApp
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/genres">Genres</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;