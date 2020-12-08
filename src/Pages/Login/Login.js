import React, { Component } from 'react';
import './Login.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Redirect} from 'react-router-dom';


import { useHistory } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => 
    this.setState({ [event.target.name]: event.target.value, error:'' });

  login = async () => {
    console.log('loggin in')
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    try {
      await this.props.firebase.login(credentials);
    } 
    catch (error) {
      console.log(error.message);
      this.setState({error: error.message})
    }
  };

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect to='/homepage'/>
    }
    return (
      <>
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </head>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <Var_navbar className="Alt_nav"/>

        <div className="Form_box_underlay">
        <p id="loginTitle">Login</p>
        </div>

        <div className="Form_box">
          <div>{this.state.error}</div>
          <Form>
            <Form.Group controlId="signInEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="signInPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Enter password" />
            </Form.Group>
            <Button onClick={this.login} id="signUpButton" variant="dark">Login</Button>
          </Form>
        </div>
      </>
  )}
};

const mapStateToProps = state => {
  return {isLoggedIn: state.firebase.auth.uid};
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps))(Login);
