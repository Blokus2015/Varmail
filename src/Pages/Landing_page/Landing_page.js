import React from 'react';
import './Landing_page.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavBar from 'react-bootstrap/NavBar';

const landing_page = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
      </head>
      <header>
      </header>
      <body>
      <Container fluid className="IntroBox">
        <Container fluid className="Header">
          <NavBar sticky='top'>
            <NavBar.Brand>VarMail</NavBar.Brand>
            <NavBar.Text>
              Log in
            </NavBar.Text>
          </NavBar>
        </Container>
        <h1 className="headingText">
          It’s hard to send personalized emails to your whole team. We think we can help.
        </h1>
      </Container>
      <Container fluid className="SignUpBox">
        <h4>The internet's first drag and drop email service</h4>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name"/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"/>
          </Form.Group>
          <Form.Group controlId="formBasicConfirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="confirmation" placeholder="Confirm Password"/>
          </Form.Group>
        </Form>
      </Container>
      <Container fluid className="Footer">
        <p>Footer</p>
      </Container>
      </body>
    </>
  )
};
export default landing_page;
