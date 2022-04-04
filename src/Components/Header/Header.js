import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg"  style={{height: '70px'} }>
      <Container fluid className="container">
        <Navbar.Brand href="#">Sikder Gadget</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 bg-dark"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <CustomLink to="/home" className="navIssue pe-3 ps-2 ">Home</CustomLink>
        <CustomLink to="/review" className="navIssue pe-3 ps-2 ">Reviews</CustomLink>
        <CustomLink to="/dashboard" className="navIssue pe-3 ps-2 ">Dashboard</CustomLink>
        <CustomLink to="/blogs" className="navIssue pe-3 ps-2 ">blogs</CustomLink>
        <CustomLink to="/about" className="navIssue pe-3 ps-2 ">About</CustomLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;