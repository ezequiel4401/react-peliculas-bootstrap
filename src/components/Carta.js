import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Carta(props) {

    const http = 'http://127.0.0.1:8000/assets/';

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={http + props.src} alt={props.nombre}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <p className="text-muted">{props.duracion} Min</p>
                    <p>Género: {props.genero}</p>
                    <p>Director: {props.director}</p>
                    <Card.Text>{props.comentario}</Card.Text>
                    <Link to="/peliculas/editar/{props.id}" className="btn btn-primary w-100">Editar</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Carta;
