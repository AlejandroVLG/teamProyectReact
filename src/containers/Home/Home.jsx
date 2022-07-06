import React from 'react';
import { Carousel } from 'react-bootstrap';

import "./Home.scss";

function Home() {
  return (
    <div className='Home'>
      <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/0b/13/d7/0b13d709e63b00caf944d1ab3385df9d.jpg"
            alt="Gladiator"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/891207.jpg"
            alt="Interstellar"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/M/MV5BMTU5NTA0OTIxNF5BMl5BanBnXkFtZTcwNjI4MTc4Mw@@._V1_.jpg"
            alt="Matrix"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home;
