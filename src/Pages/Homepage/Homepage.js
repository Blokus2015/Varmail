import React, { Component } from 'react';
import './Homepage.css';
import Org_card from '../Components/Org_card/Org_card.js';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Homepage extends Component {
  render() {
    var result = []
    for (var i = 0; i < 5; i++) {
      result.push(<Org_card groupName="Harvard Venture Capital Group"/>)
    }

    return (
      <>
        <Var_navbar />
        {result}
      </>
    )
  }
};

export default Homepage;
