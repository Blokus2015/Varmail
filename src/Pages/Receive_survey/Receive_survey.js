import React, { Component } from 'react';
import './Receive_survey.css';
import '../Create_survey/Create_survey.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Redirect} from 'react-router-dom';

class Receive_survey extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){

        var questions = (<Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    );

        return (
            <>
                <head>
                    <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossorigin="anonymous"
                    />
                </head>
                <div className="surveyBG">
                    <div className="surveyBody">
                        <div className="surveyBodyInner">
                            <p>Please fill out this survey</p>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                {questions}
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};

export default Receive_survey;