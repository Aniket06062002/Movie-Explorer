import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../api';
import Cards from '../Components/Cards';
import { Row } from 'react-bootstrap';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchedMov = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        console.log(`Fetching results for query: ${query}`);
        const results = await searchMovies(query);
        console.log('Fetched results:', results);
        setMovies(results);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="container">
      <h4>Search Result {query}</h4>
      <Row>
        {movies.length > 0 ? (
          movies.map(movie => (
            <Cards key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </Row>
    </div>
  );
};

export default SearchedMov;
