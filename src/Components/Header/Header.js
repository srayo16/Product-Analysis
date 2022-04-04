import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" style={{height: '70px'}}>
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto  my-2 my-lg-0 bg-dark"
        style={{ maxHeight: '500px'  }}
        navbarScroll
      >
        <CustomLink to="/home" className="navIssue pe-3 ps-2 ">Home</CustomLink>
        <CustomLink to="/review" className="navIssue pe-3 ps-2 ">Reviews</CustomLink>
        <CustomLink to="/dashboard" className="navIssue pe-3 ps-2 ">Dashboard</CustomLink>
        <CustomLink to="/blogs" className="navIssue pe-3 ps-2 ">blogs</CustomLink>
        <CustomLink to="/about" className="navIssue pe-3 ps-2 ">About</CustomLink>
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;