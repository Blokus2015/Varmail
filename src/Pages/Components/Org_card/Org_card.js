import React, {Component} from 'react';
import './Org_card.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class Org_card extends Component {
  render(){
    return (
      <>
        <div className="Card_base">
            <h3 className="Header_text">{this.props.groupName}</h3>
            <p className="Sub_text">{this.props.members} members</p>
            <Button id="orgButton" variant="dark"><Link className="linkCustom" to="/groups">View Organization</Link></Button>
            <Button variant="dark" id="SurveyButton"><Link className="linkCustom" to="/create_survey">Make survey</Link></Button>
            <Button id="surveysMade" variant="dark"><Link className="linkCustom" to="/create survey">View surveys made</Link></Button>
      </div>
      </>
  )
}};

export default Org_card;