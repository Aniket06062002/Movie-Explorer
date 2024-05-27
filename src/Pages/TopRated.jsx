import { useEffect, useState } from 'react';
import Cards from '../Components/Cards';
import { TopRatedMovies } from '../api';
import Pagination from '../Components/Pagination';

function TopRated() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadMovies() {
      const data = await TopRatedMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    }
    loadMovies();
  }, [currentPage]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default TopRated;
