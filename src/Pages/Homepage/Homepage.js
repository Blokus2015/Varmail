import react, { Component } from 'react';
import './Homepage.css';
import Org_card from '../Components/Org_card/Org_card.js';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';

class Homepage extends Component {
  render() {
    return (
      <>
        <Var_navbar />
        <Org_card />
      </>
    )
  }
};

export default Homepage;
