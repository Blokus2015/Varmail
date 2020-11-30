import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Landing_page.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavBar from 'react-bootstrap/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import office_pic from './Images/office.jpg';
import {Link} from 'react-router-dom';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';


class Landing_page extends Component {
  constructor(props) {
    super(props)
    this.state = { name: ''};
  }

  nameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render () {
    return (
      <>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
        </head>

        <header>
        </header>

        <Var_navbar />

        <body>
          <div className="MainBox">
            <div className="MainTextBox">
                <h1 className="HeadingText">
                  It’s hard to send personalized emails to your whole team. We think we can help.
                </h1>
            </div>
          </div>

          <div className="SignUpBox">
            <h4 id="tagline">CS50's first drag and drop email service</h4>
            <Container className="SignUpBoxSub" fluid>
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control onChange={this.nameChangedHandler} type="name" placeholder="Enter Name"/>
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
                      <Form.Control className="AnswerBoxes" type="password" placeholder="Confirm Password"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit" id="signUpButton" variant="dark">Sign me up!</Button>
              </Form>
            </Container>
          </div>
        </body>
      </>
    )
  }
};
export default Landing_page;
