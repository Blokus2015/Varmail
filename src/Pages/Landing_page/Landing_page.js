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
import {Link, Redirect} from 'react-router-dom';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Var_footer from '../Components/Var_footer/Var_footer.js';

import { useHistory } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';



class Landing_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  handleChange = event => 
    this.setState({ [event.target.name]: event.target.value, error:'' });

  register = async () => {
    console.log('registering')
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    const profile = {
      name: this.state.name,
      email: this.state.email,
    };

    try {
      await this.props.firebase.createUser(credentials, profile);
    } 
    catch (error) {
      console.log(error.message);
      this.setState({error: error.message})
    }
  };

  render () {
    // if ((this.state.password !== this.state.passwordConfirm) && (this.state.passconfirm !== "Passwords do not match.")) {
    //   this.setState({passconfirm: "Passwords do not match."})
    // } else if (this.state.password === this.state.passwordConfirm && (this.state.passconfirm !== "")) {
    //   this.setState({passconfirm: ""})
    // }
    // if (this.props.isLoggedIn) {
    //   return <Redirect to="/groups" />
    // }
    if (this.props.isLoggedIn) {
      return <Redirect to="/homepage"/>
    }
    return (
      <>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
        </head>
        <body>

          <div className="MainBox btn-group">
            <h1 className="Logo_text">Varmail</h1>
            <div className="MainTextBox">
                <h1 className="HeadingText">
                  It’s hard to send personalized emails. We think we can help.
                </h1>
            </div>
          </div>
          <div className="SignUpBox">
            <h4 id="tagline">A personalized email service for organizers</h4>
            <div>{this.state.error}</div>
            <div>{this.state.passconfirm}</div>
            <Container className="SignUpBoxSub" fluid>
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter Name"/>
                    </Form.Group>
                  </Col>
                  <Col xs={7}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="Enter Email"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control name="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Enter Password"/>
                      <Form.Text>
                        Please use one at least special character
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col xs={7}>
                    <Form.Group controlId="formBasicConfirmation">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control onChange={this.handleChange} name="passwordConfirm" className="AnswerBoxes" type="password" placeholder="Confirm Password" value={this.state.passwordConfirm}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Button id="signUpButton" variant="dark" disabled={!this.state.name.trim() || !this.state.password.trim() || !this.state.email.trim() || !this.state.passwordConfirm.trim()} onClick={this.register}>Sign me up!</Button>
              </Form>
            </Container>
          </div>
          <Var_footer />
        </body>
      </>
    )
  }
};

const mapStateToProps = state => {
  return {isLoggedIn: state.firebase.auth.uid};
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps))(Landing_page);
