import { useEffect, useState } from 'react';
import { PopularMovies } from '../api';
import Cards from '../Components/Cards';
import Pagination from '../Components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadMovies() {
      const data = await PopularMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    }
    loadMovies();
  }, [currentPage]);

  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Home;
