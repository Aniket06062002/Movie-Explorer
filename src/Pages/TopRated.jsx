import React from 'react'
import { useEffect, useState } from 'react';
import Cards from '../Components/Cards';
import { TopRatedMovies } from '../api';

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await TopRatedMovies();
      setMovies(data);
    }
    loadMovies();
  }, []);
  return (
    <>
    
      <div className="container mt-5">
        <div className="row">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
    
  
    
  )
}

export default TopRated