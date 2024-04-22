import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Main from './Main';

const NavigationBar = () => {
  return (
  <>
    <Navbar   expand="lg">
      <Navbar.Brand href="/">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Skill">Skills</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/Contact">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  </>



  );
};

export default NavigationBar;
