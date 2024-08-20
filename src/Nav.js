import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faProjectDiagram, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './Navbar.css';

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Skill">
              <FontAwesomeIcon icon={faTools} /> Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <FontAwesomeIcon icon={faUser} /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
