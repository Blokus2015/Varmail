import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from './Pages/Routes/Routes.js';
import { isLoaded } from 'react-redux-firebase';

const App = props => {
  if (!isLoaded(props.auth, props.profile)) {
    return <div>Authentication loading...</div>
  }
    return (
      <BrowserRouter>
        <Routes uid={props.uid}/>
      </BrowserRouter>
    );
}

const mapStateToProps = state => {
  return{ auth: state.firebase.auth, profile: state.firebase.profile, uid: state.firebase.auth.uid };
};

export default connect(mapStateToProps)(App);
