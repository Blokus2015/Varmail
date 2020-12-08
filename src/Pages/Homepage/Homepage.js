import React, { Component } from 'react';
import './Homepage.css';
import Org_card from '../Components/Org_card/Org_card.js';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//for testing purposes!
import { withRouter } from 'react-router-dom';
//end testing

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id
    }
  }

  render() {
    var result = []
    for (var i = 0; i < 10; i++) {
      result.push(<Org_card groupName="Harvard Venture Capital Group dsasfadf"/>)
    }

    return (
      <>
        <Var_navbar />
        <div>
          <p>Welcome Back, {this.state.id}!</p>
        </div>
        {result}
      </>
    )
  }
};

export default withRouter(Homepage);
