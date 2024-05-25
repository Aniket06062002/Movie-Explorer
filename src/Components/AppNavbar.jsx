import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className="py-0">
      <Container fluid>
        {/* Company Name with some margin */}
        <Link to="/" className="navbar-brand p-4">MovieDb</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-5 my-lg-0" style={{ maxHeight: '120px', marginLeft: 'auto' }} navbarScroll>
            <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
            <Nav.Link as={Link} to="/toprated">Top Rated</Nav.Link>
            <Nav.Link as={Link} to="/upcoming">Upcoming</Nav.Link>
          </Nav>

          <Form className="d-flex p-3">
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
}

export default AppNavbar;
