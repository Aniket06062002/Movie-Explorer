import { useEffect, useState } from 'react';
import { PopularMovies } from '../api';
import Cards from '../Components/Cards'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await PopularMovies();
      setMovies(data);
    }
    loadMovies();
  }, []);
  return (
      <div className="container mt-5">
        <div className="row">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
  )
}

export default Home;
