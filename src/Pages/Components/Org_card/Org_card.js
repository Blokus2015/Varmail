import React, {Component} from 'react';
import './Org_card.css';
import Button from 'react-bootstrap/Button';

class Org_card extends Component {
  render(){
    return (
      <>
        <div className="Card_base">
            <h3 className="Header_text">{this.props.groupName}</h3>
            <p className="Sub_text">0 members</p>
            <Button id="orgButton" variant="dark">View Organization</Button>
            <Button variant="dark" id="SurveyButton">Make survey</Button>
      </div>
      </>
  )
}};

export default Org_card;
