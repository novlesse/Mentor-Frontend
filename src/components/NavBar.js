import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
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
