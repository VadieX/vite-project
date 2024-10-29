import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wseiLogo from '../assets/wsei-logo.png';

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white p-1">
        <Container>
          <Row className="d-flex align-items-center">
            <Col className="text-center">
              <img src={wseiLogo} alt="WSEI logo" width={100} height={100} />
            </Col>
            <Col className="text-center">
              <h2>mateusz.klima@microsoft.wsei.edu.pl</h2>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;