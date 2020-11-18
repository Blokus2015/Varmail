import React from 'react';
import './Entrybox.css';
const entrybox = ( props ) => {
  return (
    <div className="Entrybox">
      <input type="text" placeholder={props.placeholder}/>
    </div>
  )
};

export default entrybox;
