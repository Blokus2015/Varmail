import React from 'react';
import './Login.css';
const Login = ( props ) => {
  return (
    <div className="Entrybox">
      <input type="text" placeholder={props.placeholder}/>
    </div>
  )
};

export default Login;
