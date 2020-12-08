import React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from  'react-redux-firebase';
import { compose } from 'redux';

const Test = props => {
  if (!isLoaded(props.person)) {
    return <div>Loading users data!</div>
  }
  return (
      <div>{props.person.sean.name}</div>
  )
};

const mapStateToProps = state => {
  console.log(state);
  const person = state.firebase.data.users;
  return{ person: person };
};

// export default firebaseConnect(['/users'])(connect(mapStateToProps)(Test));

export default compose(
  firebaseConnect(['/users']),
  connect(mapStateToProps),
)(Test);