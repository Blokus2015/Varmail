import React, { Component } from 'react';
import './Register_org.css';
import Button from 'react-bootstrap/Button';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, withRouter, Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Register_org extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: '',
      success: '',
    }
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  addOrganization = () => {
    if (!this.state.organization.trim()) {
      alert('Cannot add empty organization');
      return;
    }
    const newOrganization = this.props.firebase.push(`/Organizations/${this.props.isLoggedIn}`).key;
    const updates = {};
    const newOrg = {
      organizationName: this.state.organization,
    };
    
    const onComplete = () => {
      console.log('actually added the org');
      //reset state for next org
      this.setState({organization: ''});
    }

    updates[`/Organizations/${this.props.isLoggedIn}/${newOrganization}`] = newOrg;

    this.props.firebase.update(`/`, updates, onComplete);
    console.log('added organization')

  } 


  render() {
    if(!this.props.isLoggedIn) {
      return <Redirect to='/'/>
    }

    return (
      <>
        <Var_navbar />
        <div className="Register">
          <h1 className="Title_register">Create an organization</h1>
          {this.state.organization}
          <Form>
            <Form.Group as = {Row} controlId="formOrganizationName">
              <Form.Label column sm="2">Organization Name</Form.Label>
              <Col sm="10">
                <Form.Control value={this.state.organization} name="organization" onChange={this.handleChange} placeholder="Enter Organization Name"/>
              </Col>
            </Form.Group>
            <Button disabled={!this.state.organization} id="SignUpBox" variant="dark" onClick={this.addOrganization}>
              Create Organization
            </Button>
          </Form>
        </div>
      </>
    )
  }
};

const mapStateToProps = state => {
  return { isLoggedIn: state.firebase.auth.uid };
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(Register_org);
