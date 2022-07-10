import React, { useEffect, useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, userData } from '../userSlice'
import { useNavigate } from 'react-router-dom'

import "./Register.scss"

const Register = props => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const identification = useSelector(userData)

  const [register, setRegister] = useState({
    name: "",
    client_number: "",
    age: "",
    gender: "",
    password: "",
    role: ""
  })

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])

  const handleInput = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
  }

  const userRegister = (event) => {
    event.preventDefault()

    // if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
    //   setRegister({
    //     ...register,
    //     isError: true,
    //     message: 'Wrong e-mail'
    //   });
    //   return;
    // }
    if (register.password.length > 5) {
      if (! /[\d()+-]/g.test(register.password)) {
        setRegister({
          ...register,
          isError: true,
          message: 'Wrong password'
        });
        return;
      };
    } else {
      setRegister({
        ...register,
        isError: true,
        message: 'Password must be at least 6 characters long'
      });
      return;
    }

    setRegister({
      ...register,
      isError: false,
      errorMsg: ''
    });

    dispatch(registerUser(register.name, register.client_number, register.age, register.gender, register.password, register.role))
  }

  return (
    <Row className="Register justify-content-md-center">
      <Col md={6}>
        <br></br>
        <Form onSubmit={userRegister}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control className="label" type="text" name="name" placeholder="Name" onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control className="label" type="text" name="client_number" placeholder="Client number" onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control className="label" type="text" name="age" placeholder="Age" onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control className="label" type="text" name="gender" placeholder="Gender" onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control className="label" type="password" name="password" placeholder="Password" onChange={handleInput} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>

        </Form>
        <p>{register.isError ? register.message : ''}</p>
        <p>{identification.isError ? identification.errorMessage : identification.successMessage}</p>
      </Col>
    </Row>
  )
}

export default Register