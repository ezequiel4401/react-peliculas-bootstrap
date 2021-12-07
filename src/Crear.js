import { Container, Row, Col } from "react-bootstrap";
import { servGuardar } from "./services/peliculas";
import { useNavigate } from "react-router-dom";
import Encabezado from "./components/Encabezado";

function Crear() {

    let navigate = useNavigate();

    const handleSubmit = (evento) => {
        let nombre = evento.target.nombre.value;
        let duracion = evento.target.duracion.value;
        let genero = evento.target.genero.value;
        let director = evento.target.director.value;
        let comentario = evento.target.comentario.value;
        let archivo = evento.target.archivo.files[0];

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('duracion', duracion);
        formData.append('genero', genero);
        formData.append('director', director);
        formData.append('comentario', comentario);
        formData.append('archivo', archivo);
        
        servGuardar(formData);
        navigate('/peliculas');
    }

    return (
        <div>
            <Encabezado />
            <Container>
                <br></br>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Duracíon</label>
                                <input type="number" className="form-control" name="duracion" placeholder="Min"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Género</label>
                                <input type="text" className="form-control" name="genero"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Director</label>
                                <input type="text" className="form-control" name="director"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Comentario</label>
                                <textarea className="form-control" name="comentario"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Archivo</label>
                                <input type="file" className="form-control" name="archivo"></input>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary w-100">Enviar</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <br></br>
            </Container>
        </div>
    );
}

export default Crear;