import React from 'react';
import './Landing_page.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavBar from 'react-bootstrap/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import office_pic from './Images/office.jpg';
import {Link} from 'react-router-dom';


const landing_page = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
      </head>

      <header>
      </header>

      <body>
        <div>
          <img className="Image" src={office_pic} alt="People in office"/>
        </div>

        <div className="IntroBox">

          <div className="Header">
            <NavBar sticky='top'>
              <NavBar.Brand>VarMail</NavBar.Brand>
              <NavBar.Text>
                <Link to="/login">Log in</Link>
              </NavBar.Text>
            </NavBar>
          </div>

          <div>
            <h1 className="HeadingText">
              It’s hard to send personalized emails to your whole team. We think we can help.
            </h1>
          </div>

        </div>
        <div className="SignUpBox">
          <h4>The internet's first drag and drop email service</h4>
          <Container className="signUpBoxSub" fluid>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name"/>
                  </Form.Group>
                </Col>
                <Col xs={7}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"/>
                    <Form.Text>
                      Please use one at least special character
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col xs={7}>
                  <Form.Group controlId="formBasicConfirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="confirmation" placeholder="Confirm Password"/>
                  </Form.Group>
                </Col>
              </Row>
              <Button id="signUpButton" variant="dark">Sign me up!</Button>
            </Form>
          </Container>
        </div>

        <Container fluid className="Footer">
          <NavBar sticky='bottom'>
            <NavBar.Brand>VarMail © 2020</NavBar.Brand>
            <NavBar.Text>
              Need help?
            </NavBar.Text>
          </NavBar>
        </Container>
      </body>
    </>
  )
};
export default landing_page;
