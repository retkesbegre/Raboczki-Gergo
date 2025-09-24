import react from 'react';

function Navbar (params) {
    return{
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">React Minta</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Főoldal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/leiras">
              <Nav.Link>Leírás</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/regisztracio">
              <Nav.Link>Regisztráció</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    }
}

export default Navbar