import React, {Component} from 'react';
import './Error_page.css';
import '../Groups/Groups.css';
import Var_footer from '../Components/Var_footer/Var_footer.js';

const Error_page = () => {
  return (
    <>
      <div className="ErrorBG">
        <p className="Error_text">Sorry, we couldn't find that page.</p>
        <Var_footer />
      </div>
    </>
  )
};

export default Error_page;
