import React, { Component } from 'react';
import './View_surveys.css';
import Button from 'react-bootstrap/Button';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';


class viewSurveys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: '',
      success: '',
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
          <div className = "corner">
          <Button variant =  "dark surveyButton" href="/homepage" class="button">Go Back</Button>
          </div>

          <h1 className="Title_register">Surveys for *enter group name here*</h1>

          <div className="body">
            <div className="title">
              *The first survey*
            </div>
            <div className="responses">
              42 responses
            </div>
            <div className="link">
              *insert url here*
            </div>
          </div>


          <div className="body">
            <div className="title">
              *The second survey*
            </div>
            <div className="responses">
              921 responses
            </div>
            <div className="link">
              *insert url here*
            </div>
          </div>

          <h1 className="Title_register">
          <Button variant =  "dark surveyButton" href="/Create_survey" class="button">Create a New Survey</Button>
          </h1>



      </>
    )
  }
};

const mapStateToProps = state => {
  return { isLoggedIn: state.firebase.auth.uid };
};

export default viewSurveys;
