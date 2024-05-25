
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'; 

function Cards({ movie }) {

  return (
        <div className="col-md-3 mb-4 text-center">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="img-fluid" />
          <div>
            <h5>{movie.title}</h5>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
  );
}
Cards.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};




export default Cards;
