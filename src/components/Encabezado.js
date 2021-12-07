import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Encabezado() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <h5 className="display-5">Peliculas</h5>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="btn btn-light">Inicio</Link>
                            <Link to="/peliculas" className="btn btn-light">Peliculas</Link>
                            <Link to="/peliculas/crear" className="btn btn-light">Crear</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Encabezado;