import { useEffect } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col } from 'react-bootstrap'
import { selectFilm, addFilmData, removeCard } from "./filmSlice"
import Filmcard from '../../components/Filmcard/Filmcard'
import './Film.scss'

//import './Tiempo.scss'

const Film = props => {
    const dispatch = useDispatch()
    const films = useSelector(selectFilm)


    //let [weather, setWeather] = useState([])

    useEffect(()=> {
        axios.get('https://heroku-sqlurl.herokuapp.com/films')
        .then(resp => {
            console.log(resp.data)
            dispatch(addFilmData(resp.data))
            //setWeather(resp.data.ciudades)
        })
    }, [])

    /*const remCard = (id) => {
        dispatch(removeCard(id))
        console.log(id)
    }
    <button className="cardBtn" onClick={remCard(film.id)}>X</button>
    */
  

    return (
        <Container className="Film">
            <Row>
                {
                    films.map((data, index)=> (
                        <Col key={index} xs={12} md={2} xl={2}>
                            <Filmcard {...data} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Film 