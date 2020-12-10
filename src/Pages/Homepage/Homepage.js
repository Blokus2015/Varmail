import React, { Component } from 'react';
import './Homepage.css';
import Org_card from '../Components/Org_card/Org_card.js';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';


import { firebaseConnect, isLoaded, populate } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';


//for testing purposes!
import { withRouter } from 'react-router-dom';
//end testing

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    if (!isLoaded(this.props.myOrganizations)) {
      return <div>Loading organization data...</div>
    }
    
    var orgList = (<p>Sorry, you don't have any groups yet.</p>)
    const myOrgs = this.props.myOrganizations;
   
    console.log('before ords func')
      if (myOrgs) {
      orgList =
      Object.keys(myOrgs).map((myOrgsid, myOrgsindex) => {
        console.log("ran through groups card.")
        return <Org_card groupName={myOrgs[myOrgsid].organizationName} orgId={Object.keys(myOrgs)[myOrgsindex]} uid={this.props.uid}/>
      });
      }

    console.log(this.props.isLoggedIn)

    console.log('before ords func after')
    return (
      <>
        <Var_navbar />
        {
          this.props.isLoggedIn ?
            <div className="textBoxYeet">
              <p>Welcome Back, {this.props.email}!</p>
              <p>Not {this.props.email}?</p><Button onClick={() => this.props.firebase.logout()} variant="dark">Logout</Button>
            </div> :
          <div className="textBoxYeet">
            <Link to='/'>Register</Link>
            <br></br>
            <Link to='login'>Login</Link>
          </div>
        }
        
      <div className="textBoxYeet">
          {orgList}
          <br></br>
          <Button variant="dark"><Link className="addNewOrgBox" to="/register_org">Create new organization</Link></Button>
      </div>
      </>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.data.profile, 
    email: state.firebase.auth.email,
    isLoggedIn: state.firebase.auth.uid,
    myOrganizations: state.firebase.data.myOrganizations,
  }
}

export default compose(
  firebaseConnect(props => {
    const uid = props.uid;
    return [
      {path: `/users/${uid}`, storeAs: 'profile'},
      {path: `/Organizations/${uid}`, storeAs: 'myOrganizations'}
    ] 
  }),
  connect(mapStateToProps),)
  (Homepage);

