import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../api';
import Cards from '../Components/Cards';
import Pagination from '../Components/Pagination'; // Add this import
import { Row } from 'react-bootstrap';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchedMov = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        console.log(`Fetching results for query: ${query}`);
        const data = await searchMovies(query, currentPage);
        console.log('Fetched results:', data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
    };

    fetchData();
  }, [query, currentPage]);

  return (
    <>
      <div className="container">
        <h4>Search Result: {query}</h4>
        <Row>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Cards key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </Row>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default SearchedMov;
