import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo192.png";

export default function NavBar({ user }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="28"
          height="25"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/workshops">Workshops</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      <Nav>
        {!user && (
          <>
            <Nav.Link href="/registeration">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </>
        )}
        {user && (
          <>
            <Nav.Link href="/createWorkshop">Create Workshop</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}
