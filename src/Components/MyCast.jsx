import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { fetchCast } from '../api'; // Adjust the path as necessary
import { useParams } from 'react-router-dom';

function MyCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const castData = await fetchCast(movieId);
      if (castData) {
        setCast(castData);
      }
    };

    getCast();
  }, [movieId]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    bigmobile: {
      breakpoint: { max: 644, min: 0 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <h3 className='Carousel'>
        Cast
    </h3>
    <Carousel responsive={responsive} >
      {cast.map((member) => (
        <div key={member.id} className='inside'>
          <img
            src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
            alt={member.name}
            className="img-fluid"
          />
          <p>{member.name}</p>
        </div>
      ))}
    </Carousel>
    
    </>
  );
}

export default MyCast;
