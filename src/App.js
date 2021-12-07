import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Peliculas from "./Peliculas";
import Crear from "./Crear";
import Editar from "./Editar";
import Encabezado from "./components/Encabezado";
import { Container, Row, Col } from "react-bootstrap";

const Inicio = () => {
    return (
        <Fragment>
            <Container fluid className="inicio">
                <br></br>
                <Row>
                    <Col>
                        <div className="text-center">
                            <h1 className="text-white">Peliculas</h1>
                            <Link to="/peliculas" className="btn btn-light">Comenzar</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/peliculas" element={<Peliculas />}></Route>
                <Route path="/peliculas/crear" element={<Crear />}></Route>
                <Route path="/peliculas/editar/:id" element={<Editar />}></Route>
            </Routes>
        </div>
    );
}

export default App;
