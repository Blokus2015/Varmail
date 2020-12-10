import React, {Component} from 'react';
import './Org_card.css';
import Button from 'react-bootstrap/Button';
import { Link, Redirect, withRouter } from 'react-router-dom';


import { firebaseConnect, isLoaded, populate } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Org_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleSurvey = () => {
    console.log('handling survey creation...');
    const surveyId = this.props.firebase.push(`Organizations/${this.props.uid}/${this.props.orgId}`).key;
    const newSurvey = {name: "Your survey"};
    const updates = {};
    console.log('getting to updates')
    updates[`/Organizations/${this.props.uid}/${this.props.orgId}/${surveyId}`] = newSurvey;

    const onComplete = (orgThing) => {
      console.log('redirecting user');
      this.props.history.push(`/create_survey/${surveyId}`, {state: { theOrgId: orgThing }});
      console.log('redirect complete')
      console.log(this.props.orgId);
      console.log('finished handling survey');
    }
    this.props.firebase.update(`/`, updates, onComplete(this.props.orgId));
  }

  handleGroups = () => {
    console.log('handling group creation');
    this.props.history.push(`/groups/${this.props.orgId}`, {state: { theOrgId: this.props.orgId }});
  }

  render(){
    return (
      <>
        <div className="Card_base">
            <h3 className="Header_text">{this.props.groupName}</h3>
            <p className="Sub_text">Click Below for info on messages</p>
            <Button id="orgButton" variant="dark" onClick={this.handleGroups.bind(this, this.props.orgId, this.props.uid)}>Send emails</Button>
            <Button variant="dark" id="SurveyButton" onClick={this.handleSurvey.bind(this, this.props.orgId, this.props.uid)}>Make Message</Button>
            {/*<Button id="surveysMade" variant="dark"><Link className="linkCustom" to="/create survey">View surveys made</Link></Button>*/}
      </div>
      </>
  )
}};

export default compose(
  withRouter,
  firebaseConnect(),
  )(Org_card);