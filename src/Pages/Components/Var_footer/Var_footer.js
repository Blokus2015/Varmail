import React from 'react';
import {Link} from 'react-router-dom';
import './Var_footer.css';
import { Navbar, Nav } from 'react-bootstrap';

const Var_footer = ( props ) => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </head>

      <Navbar className="Var_footer" fixed="bottom">
        <Navbar.Brand><Link to="/" className="Footer_text">Made by Sean Roades & Quan Narula</Link></Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/homepage" className="Foot_links">Dashboard</Link></Nav.Link>
            <Nav.Link><Link to="/login" className="Foot_links">Login</Link></Nav.Link>
            <Nav.Link><Link to="/" className="Foot_links">Logout</Link></Nav.Link>
          </Nav>
      </Navbar>
    </>
  )
};

export default Var_footer;
