import React, {Component} from 'react';
import './Groups.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from  'react-redux-firebase';
import { compose } from 'redux';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    if(!isLoaded(this.props.teamMembers)) {
      return <div>Loading team teamMembers</div>
    }
    return (
      <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </head>
        <Button to="/" variant="dark">Back</Button>
        <div className="Groups_title">
          <h1>Team members</h1>
          {/*<p>{this.props.teamMembers.surveyQuestion1.answers.answer1}</p>
          <p>{this.props.teamMembers.surveyQuestion1.answers.answer2}</p> */}

        </div>
        <div class="ripple-background">
          <div class="circle xxlarge shade1"></div>
          <div class="circle xlarge shade2"></div>
          <div class="circle large shade3"></div>
          <div class="circle mediun shade4"></div>
          <div class="circle small shade5"></div>
        </div>
      </>
    )
}};

const mapStateToProps = state => {
  console.log(state);
  const teamMembers = state.firebase.data.survey;
  return { teamMembers: teamMembers };
};

export default compose(
  firebaseConnect([{path:'/users/sean/Organization/Survey', storeAs: 'survey'}]),
  connect(mapStateToProps),
)(Groups);
