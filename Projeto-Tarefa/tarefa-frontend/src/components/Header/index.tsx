import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Tarefas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} className = "nav-Item" to = "/">Início</Nav.Link>
                <Nav.Link as={Link} className = "nav-Item" to = "/tarefas">Tarefas</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;

