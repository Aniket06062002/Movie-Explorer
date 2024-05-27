import { useEffect, useState } from 'react';
import { UpComingMovies } from '../api';
import Cards from '../Components/Cards';
import Pagination from '../Components/Pagination';

const UpComingMov = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadMovies() {
      const data = await UpComingMovies(currentPage);
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

export default UpComingMov;
