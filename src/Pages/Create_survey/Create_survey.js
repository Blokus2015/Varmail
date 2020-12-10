import React, { useState, useRef, Component } from "react";
import ReactDOM from "react-dom";
import './Create_survey.css';
import { Modal, Button, Form } from "react-bootstrap";
import { Link, withRouter, Redirect } from 'react-router-dom';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Create_survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      question: '',
      name: '',
    };
  }

  finishSurvey = (props) => {
    console.log('handling survey question & making sure this does not blow up...');
    var title = this.state.name;
    const newSurveyQuestions = {title: title, questionsInList: this.state.questionList};
    //const question = {question: "how was your day?bruhhhhhhh"}
    //const newQuestionList = this.props.firebase.push(`Organizations/${this.props.uid}/${this.props.location.state.state.theOrgId}/${this.props.match.params.id}`).key
    const updates = {};
    console.log('updating title')
    // updates[`/Organizations/${this.props.uid}/${this.props.location.state.state.theOrgId}/${this.props.match.params.id}`] = newTitle;
    updates[`/Organizations/${this.props.uid}/${this.props.location.state.state.theOrgId}/${this.props.match.params.id}`] = newSurveyQuestions;

    const onComplete = () => {
      console.log('redirecting user');
      this.props.history.push(`/survey_overlays`);
      console.log('redirect complete')
    }

    this.props.firebase.update(`/`, updates, onComplete);
    console.log(this.props.orgId);
    console.log('finished handling survey');
  }

  addQuestion = () => {
    if (!this.state.question.trim()) {
      alert('Cannot add a blank question');
      return;
    }

    const newQuestion = { question: this.state.question};
    const questionList = this.state.questionList.slice().concat(newQuestion);
    this.setState({questionList, question: ''});
  };

  deleteQuestion = index => {
    const questionList = this.state.questionList.slice();
    questionList.splice(index, 1);
    this.setState({ questionList });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {

    const questionList = this.state.questionList.map((question, index) => {
      return (
        <tr key={index}>
          <td>{question.question}</td>
          <td>
            <Button variant="dark surveyButton"  onClick={() => this.deleteQuestion(index)}>Delete Message Text</Button>
          </td>
        </tr>
      );
    });

    if(!this.props.isLoggedIn) {
      return (
        <div>RECEIVERSURVEY NEEDS TO GO HERE</div>
      )
    }

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
      <p className="surveyTitles">
          Create A Message
      </p>
      <p className="surveyInstructions">
          Sending a message is easy--just add some text!
      </p>
      <div className="surveyBody">
      <div className="surveyBodyInner">
      <h className="surveyHeaders">Title</h>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter your survey name here"
          />
      <h className="surveyHeaders">Message</h>
      <ul className = "surveyQuestions">
          <ul>{questionList}</ul>
      </ul>
          <textarea
            name="question"
            onChange={this.handleChange}
            placeholder="Enter your question here"
            value={this.state.question}
          />
          <Button variant="dark surveyButton" onClick={this.addQuestion} disabled={this.state.questionList.length === 1 || !this.state.name}>Add Message</Button>
       <br/>
            <Button variant="dark surveyButton" href="/Survey_overlay" disabled={this.state.questionList.length === 0 || !this.state.name} onClick={this.finishSurvey.bind(this, this.state.name, this.props.location.state.state.theOrgId, this.state.questionList)}>
              Finish Message
            </Button>
          </div>
          </div>
      </div>
      </>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    profile: state.firebase.data.profile, 
    email: state.firebase.auth.email,
    isLoggedIn: state.firebase.auth.uid,
    myOrganizations: state.firebase.data.myOrganizations,
  }
}

export default compose(
  withRouter,
  firebaseConnect(props => {
    const uid = props.uid;
    return [
      {path: `/users/${uid}`, storeAs: 'profile'},
      {path: `/Organizations/${uid}`, storeAs: 'myOrganizations'}
    ] 
  }),
  connect(mapStateToProps),)
  (Create_survey);
