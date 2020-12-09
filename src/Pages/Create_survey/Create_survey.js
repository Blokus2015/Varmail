import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import './Create_survey.css';
import { Modal, Button, Form } from "react-bootstrap";

{/*


import React, { Component } from "react";
import './Create_survey.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Redirect} from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import {connect} from 'react-redux';
import {compose} from 'redux';


class CreateSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ''
        }

        // this.handleNewQuestion = this.handleNewQuestion.bind(this);
    }



  //   handleNewQuestion() {
      //   questionList.push(
    //        <Form.Group>
      //           <Form.Label>New Question</Form.Label>
      //           <Form.Control placeholder="Type question here"/>
      //       </Form.Group>
  //       )
//     }





    render(){
      var questionList = (
      <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control placeholder="Type question here" />
      </Form.Group>);
        var doneQuestionList = (
            <>
                <p>Question</p>
                <p>{this.state.question}</p>
            </>
        )



        var peopleList = (<p className='raleway center'>There are no people in your shelter yet! Add someone to make their holiday dreams come true!</p>)

        const people = this.props.people;

        if (people) {
          peopleList =
          Object.keys(people).map((uid, index) => {
            return <h name={people[uid].name} bio={people[uid].bio} uid={uid} shelterid={this.props.uid}/>
          });
        }


        return(
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
                    <p className="surveyTitles">
                        Create Survey
                    </p>
                    <div className="surveyBody">
                        <Form className="surveyBodyInner">
                            <Form.Group>
                                <Form.Label>Title of survey</Form.Label>
                                <br></br>
                                <Form.Control placeholder="Enter Title of survey"/>
                            </Form.Group>
                           {doneQuestionList}
                            {questionList}
                            <Button variant="dark surveyButton" onClick={this.handleNewQuestion}>Add New Question</Button>
                        </Form>
                    </div>
                </div>
                </>
)


    }
}

export default CreateSurvey;

*/}


function CreateSurvey() {




  const [newListItem, setNewListItem] = useState([]);
  const [show, setShow] = useState(false);
  const input = useRef();
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);

  var addToList = e => {
    e.preventDefault();
    setNewListItem([...newListItem, input.current.value]);
  };

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
    <p className="surveyTitles">
        Create A Survey
    </p>
    <p className="surveyInstructions">
        Making a survey is easy- just create a title and add some questions!
    </p>

    <div className="surveyBody">
    <div className="surveyBodyInner">
    <Form.Group>
        <Form className="surveyHeaders">Survey Title</Form>
        <br></br>
        <Form.Control placeholder="Enter your survey name here"/>
    </Form.Group>
    <Form className="surveyHeaders">Survey Questions</Form>
      <ul className = "surveyQuestions">
        {newListItem.map((item, b) => (
          <li key={b}>{item}</li>
        ))}
      </ul>
        <form onSubmit={addToList}>
            <Form.Group>
              <br />
              <Form.Control type="text" ref={input} placeholder="Enter your question here" />
            </Form.Group>
            <Button variant="dark surveyButton" type="sumbit">Add a New Question</Button>
        </form>

        <Button variant="dark surveyButton" type="sumbit">Finish Survey</Button>

    </div>
    </div>
    </div>
    </>
  );
}

export default CreateSurvey;
