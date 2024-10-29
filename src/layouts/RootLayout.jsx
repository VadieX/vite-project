import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/*import NavDropdown from 'react-bootstrap/NavDropdown';*/

function RootLayout({ children }) {
    return (
        <>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/lab1">Labolatorium 1</Nav.Link>
                <Nav.Link href="/lab2">Labolatorium 2</Nav.Link>
              </Nav>
            </Container>
            </Navbar> 
            <Container>{children}</Container>
            </>
      );
    
}
export default RootLayout;