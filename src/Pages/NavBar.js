import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;