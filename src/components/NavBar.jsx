import React from 'react';
import Home from '../pages/HomePage.jsx';
import Lab1 from '../pages/Lab1Page.jsx';
import Lab2 from '../pages/Lab2Page.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    const menuItems = [
        { id: 1, 
            label: 'Home', 
            url: '/',
            element: <Home />
        },
        { id: 2, 
            label: 'Labolatorium 1', 
            url: '/lab1',
            element: <Lab1 />
        },
        { id: 3, 
            label: 'Labolatorium 2', 
            url: '/lab2/1',
            urlPattern: '/lab2/:id',
            element: <Lab2 />
        },
    ];

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand>Frameworki frontendowe</Navbar.Brand>
                <Nav className="me-auto">
                    {menuItems.map(item => (
                        <Nav.Link href={item.url} key={item.id}>
                            {item.label}
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;