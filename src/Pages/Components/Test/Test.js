import React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from  'react-redux-firebase';
import { compose } from 'redux';

const Test = props => {
  if (!isLoaded(props.users)) {
    return <div>Loading users data!</div>
  }
  return (
      <div>{props.users.sean.name}</div>
  )
};

const mapStateToProps = state => {
  console.log(state);
  const users = state.firebase.data.users;
  return{ users: users };
};

// export default firebaseConnect(['/users'])(connect(mapStateToProps)(Test));

export default compose(
  firebaseConnect(['/users']),
  connect(mapStateToProps),
)(Test);