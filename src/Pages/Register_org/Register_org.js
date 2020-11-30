import React from 'react';
import './Register_org.css';
import Button from 'react-bootstrap/Button';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Register_org = () => {
  return (
    <>
      <Var_navbar />
      <div className="Register">
        <h1 className="Title_register">Create an organization</h1>
        <Form>
          <Form.Group as = {Row} controlId="formOrganizationName">
            <Form.Label column sm="2">Organization Name</Form.Label>
            <Col sm="10">
              <Form.Control placeholder="Enter Organization Name"/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="exampleForm.SelectCustom">
            <Form.Label column sm="2">Privacy</Form.Label>
            <Col sm="10">
              <Form.Control as="select" custom>
                <option>Private</option>
                <option>Public</option>
              </Form.Control>
              <Form.Text>
                This will allow anyone with your link to see members in your group along with their information.
              </Form.Text>
            </Col>
          </Form.Group>
          <Button id="SignUpBox" variant="dark" type="submit">
            Create Organization
          </Button>
        </Form>
      </div>
    </>
  )
};
export default Register_org;
