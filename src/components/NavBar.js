import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo192.png";

export default function NavBar(props) {
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
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/registeration">Register</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
