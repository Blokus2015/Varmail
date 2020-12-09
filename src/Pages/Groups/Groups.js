import React, {Component} from 'react';
import './Groups.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import emailjs from "emailjs-com";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from  'react-redux-firebase';
import { compose } from 'redux';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      recipient: '',
      subject: '',
      message: '',
    };
  }


  sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_idapiq4', 'template_g1tauwo', e.target, 'user_deuwa03kMxAwKcmYnfzQR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

  handleSendSurvey = () => {
    this.setState({sender: 'from sean', recipient: 'seanroades@gmail.com', subject: 'this is my subject', })
  }

  render(){

    var surveyList = <p>no surveys yet!</p>

    const mySurveys = this.props.bigChungusSurvey;

    console.log(mySurveys);

    if (mySurveys) {
      surveyList =
      Object.keys(mySurveys).map((mySurveyId, mySurveyindex) => {
        console.log("in surveys")
        return <Button onClick={this.handleSendSurvey}>{mySurveys[mySurveyId].title}</Button>
      });
      }

    return (
      <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </head>

        <Link to="/" variant="dark">Back</Link>
        <div className="Groups_title">
          <h1>Send out survey</h1>
          {/*<p>{this.props.teamMembers.surveyQuestion1.answers.answer1}</p>
          <p>{this.props.teamMembers.surveyQuestion1.answers.answer2}</p> */}
        </div>
        <div>
          <div className="container">
            <div className="mainText">
              {surveyList}
              <br></br>
              {this.state.sender}
              {this.state.recipient}
              {this.state.sender}
              {this.state.sender}
             <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Your Name" name="from_Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="To name" name="to_Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
              </div>
            </div>
        </div>
      </>
    )
}};

const mapStateToProps = state => {
  console.log(state);
  const teamMembers = state.firebase.data.survey;
  return { 
    bigChungusSurvey: state.firebase.data.bigChungusSurvey,
    uid: state.firebase.auth.uid,
  };
};

export default compose(
  withRouter,
  firebaseConnect( props => {
    const uid = props.uid;
    const groupId = props.match.params.orgId;
    console.log(groupId + uid)
    return [
      {path:`/Organizations/${uid}/${groupId}`, storeAs: 'bigChungusSurvey'}
    ]
  }),
  connect(mapStateToProps),
)(Groups);
