import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import drive from "../../../src/assets/drive.svg";
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <img src={drive} alt="Drive Icon" style={{height:50}}/> Cloud Drive {/* Use the drive icon in the Navbar */}
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link> 
      </Nav>
    </Navbar>
  );
}
