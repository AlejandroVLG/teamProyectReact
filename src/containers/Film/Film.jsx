import { useEffect } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col } from 'react-bootstrap'
import { selectFilm, addFilmData, removeCard } from "./filmSlice"
import Filmcard from '../../components/Filmcard/Filmcard'
import './Film.scss'

const Film = props => {
    const dispatch = useDispatch()
    const films = useSelector(selectFilm)

    useEffect(()=> {
        axios.get('https://heroku-sqlurl.herokuapp.com/films')
        .then(resp => {
            console.log(resp.data)
            dispatch(addFilmData(resp.data))
        })
    }, [])

    return (
        <Container className="Film">
            <Row>
                {
                    films.map((data, index)=> (
                        <Col key={index} xs={12} md={4}>
                            <Filmcard {...data} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Film 