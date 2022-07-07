import React, { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap'
import './Filmcard.scss'

const Filmcard = props => { 
    const {
      director,
      title,
      year,
      url,
      genre,
      recomended_age,
      duration,
      price,
      trailerUrl
    } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Card className = "FilmCard">
            <Card.Img
              className="filmCardImg"
              variant="top"
              src={url || "https://static.vecteezy.com/system/resources/previews/000/665/794/large_2x/vector-cinema-elements.jpg"}
              onClick={handleShow}
            />
            <Card.Body>
                <Card.Title>
                    <h2>{title}</h2>
                </Card.Title>
            </Card.Body>
        </Card>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <img className="cardImgClick" src={url || "https://static.vecteezy.com/system/resources/previews/000/665/794/large_2x/vector-cinema-elements.jpg"}/>
            <h5>Información</h5>
            <ul>
                <li><strong>Director:</strong> {director}</li>
                <li><strong>Release date:</strong> {year}</li>
                <li><strong>Genre:</strong> {genre}</li>
                <li><strong>Recommended age:</strong> {recomended_age}</li>
                <li><strong>Duration:</strong> {duration} minutes</li>
                <li><strong>Price:</strong> {price} EUR </li>
            </ul>
            <Button variant="primary" className ="cardBtn" size="lg" href={trailerUrl} target="_blank">Watch Trailer</Button>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default Filmcard 