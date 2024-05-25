import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cards({ movie }) {
  return (
    <div className="col-md-3 mb-4 text-center">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="img-fluid" />
        <div>
          <h5>{movie.title}</h5>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </Link>
    </div>
  );
}

Cards.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
