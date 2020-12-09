import React, { Component } from 'react';
import './Homepage.css';
import Org_card from '../Components/Org_card/Org_card.js';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';


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
    if(!isLoaded(this.props.profile)) {
      return<div>Profile loading for homepage...</div>
    }
    return (
      <>
        <Var_navbar />
        {
          this.props.isLoggedIn ?
            <div>
              <p>Welcome Back, {this.props.email}!</p>
              <p>Not {this.props.email}?</p><Button onClick={() => this.props.firebase.logout()}className="signOutButton">Logout</Button>
            </div> :
          <div>
            <Link to='/'>Register</Link>
            <br></br>
            <Link to='login'>Login</Link>
          </div>
        }
        
        
        {result}
      </>
    )
  }
};


const mapStateToProps = state => {
  return {
    profile: state.firebase.data.profile, 
    email: state.firebase.auth.email,
    isLoggedIn: state.firebase.auth.uid,
  }
}

export default compose(
  firebaseConnect(props => {
    const uid = props.uid;
    return [
      {path: `/users/${uid}`, storeAs: 'profile'}
    ] 
  }),
  connect(mapStateToProps),)
  (Homepage);

