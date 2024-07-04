// src/App.js
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import moviesData from './moviesData';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
      );
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <h1>My Movie App</h1>
                <AddMovie onAdd={handleAddMovie} />
                <Filter onFilter={handleFilter} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movies/:title" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
