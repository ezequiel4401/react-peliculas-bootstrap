import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { servObtenerTodo } from "./services/peliculas";
import Carta from "./components/Carta";
import Encabezado from "./components/Encabezado";

function Peliculas() {

    const [peliculas, setPeliculas] = useState([]);

    const obtenerTodo = async () => {
        let res = await servObtenerTodo();
        setPeliculas(res);
    }

    useEffect(() => {
        obtenerTodo();
    }, []);

    return (
        <div>
            <Encabezado />
            <Container>
                <br></br>
                <Row>
                    {
                        peliculas.map((pelicula, index) => {
                            return (
                                <Col lg={4}>
                                    <Carta key={index}
                                    nombre={pelicula.nombre}
                                    duracion={pelicula.duracion}
                                    genero={pelicula.genero}
                                    director={pelicula.director}
                                    comentario={pelicula.comentario}
                                    src={pelicula.archivo}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                <br></br>
            </Container>
        </div>
    );
}

export default Peliculas;
