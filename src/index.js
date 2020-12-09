import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Pages/Routes/Routes';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'
import 'firebase/functions';
import 'firebase/analytics'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import { composeWithDevTools } from 'redux-devtools-extension';


const firebaseConfig = {
  apiKey: "AIzaSyCdOVwzwAMwVHynk6Du6d-OD5yEnIgLlzI",
  authDomain: "varmail.firebaseapp.com",
  databaseURL: "https://varmail-default-rtdb.firebaseio.com",
  projectId: "varmail",
  storageBucket: "varmail.appspot.com",
  messagingSenderId: "818226986787",
  appId: "1:818226986787:web:708a4040ce379b0e221696",
  measurementId: "G-W942PM2XLX"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();


// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  preserveOnLogout: ['profile'],
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { firebaseConfig, firebase, storage as default };