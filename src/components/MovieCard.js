// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={`${movie.title} Poster`} className="movie-poster" />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movies/${movie.title}`}>See Details</Link>
    </div>
  );
};

export default MovieCard;
