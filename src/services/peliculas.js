import axios from "axios";

const http = 'http://127.0.0.1:8000/api/peliculas';

export const servObtenerTodo = async () => {
    const res = await fetch(http);
    const resultado = await res.json();
    return await resultado;
}

export const servObtenerPorId = async (id) => {
    const res = await axios.get(http + '/' + id);
    return await res;
}

export const servGuardar = async (datos) => {
    await axios.post(http, datos, {
        'Content-Type': 'multipart/form-data'
    });
    return datos;
}

export const servEditar = async (id, datos) => {
    await axios.put(http + '/' + id, datos);
    return datos;
}

export const servBorrar = async (id) => {
    await axios.delete(http + '/' + id);
    return id;
}