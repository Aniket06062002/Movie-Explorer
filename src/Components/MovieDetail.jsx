import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import MyCast from './MyCast';

function MovieDetail() {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovieDetails(details);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container className='MovieDetails'>
        <Row>
          <Col md={6} className='leftSection'>
            <Row>
              <Col xs={4}>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="Small Img" className="img-fluid" />
              </Col>
              <Col xs={8}>
                <h4>{movieDetails.original_title}</h4>
                <p>Rating: {movieDetails.vote_average}</p>
                <div className="d-flex align-items-center">
                  <Button variant="dark">{movieDetails.runtime} mins</Button>
                  <p className="mb-0 ms-3">{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                </div>
                <p>Release Date: {movieDetails.release_date}</p>
              </Col>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
            </Row>
          </Col>
          <Col md={6} className='RightSec'>
            <div className='image-container'>
              <img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt="Backdrop" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>


      <MyCast /> 
    
    </>
  );
}

export default MovieDetail;
