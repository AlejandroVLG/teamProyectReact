import React from 'react';
import "./Header.scss";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userData } from '../../containers/User/userSlice';


const Header = () => {

    const identification = useSelector(userData)

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
            </div>
        )
    }
}

export default Header