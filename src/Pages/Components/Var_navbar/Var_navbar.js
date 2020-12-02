import React from 'react';
import {Link} from 'react-router-dom';
import './Var_navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const Var_navbar = ( props ) => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </head>

      <Navbar className="Var_navbar" fixed="sticky">
        <Navbar.Brand><p><Link to="/" className="Logo_text_link">VarMail</Link></p></Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/homepage" className="Nav_links">Dashboard</Link></Nav.Link>
            <Nav.Link><Link to="/login" className="Nav_links">Login</Link></Nav.Link>
            <Nav.Link><Link to="/" className="Nav_links">Logout</Link></Nav.Link>
          </Nav>
      </Navbar>
    </>
  )
};

export default Var_navbar;
