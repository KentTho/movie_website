import React from 'react';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>🎬 Danh sách phim nổi bật</h1>
        <p>Khám phá thế giới điện ảnh ngay tại đây!</p>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
