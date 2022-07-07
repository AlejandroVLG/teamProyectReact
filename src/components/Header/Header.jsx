import React from 'react';
import "./Header.scss";
<<<<<<< HEAD
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
=======
import { useNavigate } from "react-router-dom"
>>>>>>> 935e5e68293d7f1a724bb22e512f2429e3981a59
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userData } from '../../containers/User/userSlice';


const Header = () => {

    const identification = useSelector(userData)

<<<<<<< HEAD
    const dispatch = useDispatch()

    if (!identification?.name) {

        return (
            <div className='Nav1'>
                <Nav.Item className='firstNav'>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/films">Films</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/users/login">Login</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/users/adduser">Register</NavLink>
                </Nav.Item>
            </div>
        )
    } else { 
        return (
            <div className='Nav2'>
                <Nav.Item className='firstNav'>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/films">Films</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="" to="/">{identification?.user.name}</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={()=>dispatch(logOut())} >Logout</NavLink>
                </Nav.Item>
=======
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const travel = (destiny) => {
        navigate(destiny)
    }

    if (!identification?.token) {

        return (
            <div className='nav1'>
                <div className="nav1First">
                    <div className="nav" onClick={() => travel("/")}>Home</div>
                    <div className="nav" onClick={() => travel("/films")}>Films</div>
                </div>
                <div lassName='netflixContainer'>
                    <img className='netflix' src="../../../public/img/netflixpobre.jpeg" alt="" />
                </div>
                <div className="nav1Second">
                    <div className="nav" onClick={() => travel("/users/login")}>Login</div>
                    <div className="nav" onClick={() => travel("/users/adduser")}>Register</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='nav2'>
                <div className='nav2First'>
                    <div className="nav" onClick={() => travel("/")}>Home</div>
                    <div className="nav" onClick={() => travel("/films")}>Films</div>
                    <div className="nav" onClick={() => travel("/films/addfilm")}>Add Film</div>
                </div>
                <div className='netflixContainer'>
                    <img className='netflix' src="../../../public/img/netflixpobre.jpeg" alt="" />
                </div>
                <div className="nav2Second">
                    <div className="nav userName" to="/">{identification?.user.name}</div>
                    <div className="nav" onClick={() => dispatch(logOut())} >Logout</div>
                </div>
>>>>>>> 935e5e68293d7f1a724bb22e512f2429e3981a59
            </div>
        )
    }
}

export default Header
