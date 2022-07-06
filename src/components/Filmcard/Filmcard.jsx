import React from "react";
import { Card, Button } from 'react-bootstrap'
import './Filmcard.scss'

const Filmcard = props => { 
    const { director, title, year, url, genre, recomended_age, duration, price, trailerUrl } = props;
    return (
        <Card className = "Filmcard">
            <Card.Img variant="top" src={url || "https://static.vecteezy.com/system/resources/previews/000/665/794/large_2x/vector-cinema-elements.jpg"} />
            <Card.Body>
                <Card.Title>
                    <h2>{title}</h2>
                </Card.Title>
                <h5>Información</h5>
                <ul>
                    <li><strong>Director:</strong> {director}</li>
                    <li><strong>Año de estreno:</strong> {year}</li>
                    <li><strong>Genero:</strong> {genre}</li>
                    <li><strong>Edad recomendada:</strong> {recomended_age}</li>
                    <li><strong>Duración:</strong> {duration} minutos</li>
                    <li><strong>Precio:</strong> {price} EUR </li>
                </ul>
                <Button variant="primary" className ="cardBtn" size="lg" href={trailerUrl} target="_blank">Ver Trailer</Button>
            </Card.Body>
        </Card>
    )
}

export default Filmcard 