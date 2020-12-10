import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Survey_overlay.css';
import { Modal, Button, Form } from "react-bootstrap";
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import { Link, withRouter, Redirect } from 'react-router-dom';


class Survey_overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



render() {
  return (
    <>
    <Var_navbar />
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
    <p className="surveyHeaders">
        Congratulations on creating your message! 
    </p>

    <p className="surveyText">
        Your message results will be automatically uploaded under the "View Organization" button on the Home Page
    </p>

    <Button variant="dark surveyButton" href="/homepage" class="button">Click here to get to the Home Page</Button>

    </div>
    </div>
    </div>
    </>
  )
}
};

export default withRouter(Survey_overlay);
