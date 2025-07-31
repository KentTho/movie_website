// src/components/Footer.js
import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-enhanced">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About MovieApp</h3>
          <p>
            Your ultimate destination for discovering amazing movies, 
            creating watchlists, and exploring the world of cinema. 
            Join our community of movie enthusiasts and never miss 
            a great film again.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="YouTube">📺</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/movies">Browse Movies</a>
            <a href="/genres">Genres</a>
            <a href="/top-rated">Top Rated</a>
            <a href="/new-releases">New Releases</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Account</h3>
          <div className="footer-links">
            <a href="/profile">My Profile</a>
            <a href="/watchlist">My Watchlist</a>
            <a href="/favorites">Favorites</a>
            <a href="/settings">Settings</a>
            <a href="/help">Help Center</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/careers">Careers</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          © 2025 <span className="highlight">MovieApp</span>. All rights reserved. 
          Made with ❤️ for movie lovers everywhere.
        </p>
      </div>
    </footer>
  );
};

export default Footer;