import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCast from '../Components/MyCast'


function MovieDetail() {
  return (
    <>
    
    
    <Container className='MovieDetails'>
      <Row>
        <Col md={6} className='leftSection'>
          <Row>
            <Col xs={4}>
              <img src="https://picsum.photos/200/300" alt="Small Img" className="img-fluid" />
            </Col>
            <Col xs={8}>
              <h4>Heading</h4>
              <p>Rating : </p>
              <div className="d-flex align-items-center">
                <Button variant="dark">97 Min</Button>
                <p className="mb-0 ms-3">Side Paragraph</p>
              </div>
              <p>Release Date</p>
            </Col>
            <h3>Overview</h3>
            <p>Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.</p>

          </Row>
        </Col>
        <Col md={6} className='RightSec'>
          <div className='image-container'>

            <img src="https://picsum.photos/500/300" />
          </div>
        </Col>
      </Row>
    </Container>

    <MyCast/>

    </>
  );
}

export default MovieDetail;
