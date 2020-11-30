import React, { Component } from 'react';
import './Login.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ( props ) => {
  return (
    <>
      <head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <Var_navbar />
      <div className="Form_box_underlay">
      <p id="loginTitle">Login</p>
      </div>

      <div className="Form_box">
        <Form>
          <Form.Group controlId="signInEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="signInPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button type="submit" id="signUpButton" variant="dark">Login</Button>
        </Form>
      </div>
    </>
  )
};

export default Login;
