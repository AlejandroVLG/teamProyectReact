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
        <Card className = "Filmcard">
            <Card.Img
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
          <Modal.Body>
            <img width={230} height={345} 
            src={url || "https://static.vecteezy.com/system/resources/previews/000/665/794/large_2x/vector-cinema-elements.jpg"}/>
            <ul>
                <li><strong>Director:</strong> {director}</li>
                <li><strong>Año de estreno:</strong> {year}</li>
                <li><strong>Genero:</strong> {genre}</li>
                <li><strong>Edad recomendada:</strong> {recomended_age}</li>
                <li><strong>Duración:</strong> {duration} minutos</li>
                <li><strong>Precio:</strong> {price} EUR </li>
            </ul>
            <Button className ="cardBtn" size="lg" onClick={trailerUrl} target="_blank">Ver Trailer</Button>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default Filmcard 