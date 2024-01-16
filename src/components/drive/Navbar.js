import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import drive from "../../../src/assets/drive.svg";
import User from "../../../src/assets/User.png";
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <img src={drive} alt="Drive Icon" style={{ height: 50 }} /> Cloud Drive{" "}
        {/* Use the drive icon in the Navbar */}
      </Navbar.Brand>
      <Nav class="navbar-nav ml-auto">
        <Nav.Link as={Link} to="/user">
          Profile
          <img
            src={User}
            alt="Drive Icon"
            style={{ height: 40, marginLeft: 10 }}
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
