// src/components/MovieDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moviesData from '../moviesData';
import Navbar from './Navbar';

const MovieDetail = () => {
  const { title } = useParams();
  const movie = moviesData.find((movie) => movie.title === title);

  return (
    <div className="movie-detail">
      <Navbar />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
