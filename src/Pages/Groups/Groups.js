import React, {Component} from 'react';
import './Groups.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Button from 'react-bootstrap/Button';

class Groups extends Component {
  render(){
      return (
        <>
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
        </head>
          <Button to="/" variant="dark">Back</Button>
          <div className="Groups_title">
            <h1>Team members</h1>
            <p>names go here</p>
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

export default Groups;
