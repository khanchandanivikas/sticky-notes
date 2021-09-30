import React from "react";
import "../Style/Nota.css";
import axios from "axios";
import { useState } from "react";

const ElementoNotas = (props) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const nota = props.element;
  const [nuevoEliminar, setNuevoEliminar] = useState(nota.id);
  const handleNuevoEliminar = () => {
    setNuevoEliminar(nota.id);
  };
  const [nuevoModificar, setNuevoModificar] = useState(nota.id);
  const handleNuevoModificar = () => {
    setNuevoModificar(nota.id);
  };
  const [nuevoTitulo, setNuevoTitulo] = useState(nota.titulo);
  const handleNuevoTitulo = (e) => {
    setNuevoTitulo(e.target.value);
  };
  const [nuevoNote, setNuevoNote] = useState(nota.note);
  const handleNuevoNote = (e) => {
    setNuevoNote(e.target.value);
  };
  const handleEliminar = async (e) => {
    e.preventDefault();
    const recuperarNotas = props.notasRecuperar;
    // await fetch(`http://localhost:1337/notes/${nuevoEliminar}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((request) => {
    //     request.json();
    //     recuperarNotas();
    //     alert("eliminado¡¡¡")
    //   })
    //   .catch((error) => {
    //     console.log("error" + error);
    //   });
    try {
      const request = await axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/notes/${nuevoEliminar}`
      );
      const datos = request.data;
      console.log(datos);
      alert("eliminado¡¡¡");
      recuperarNotas();
    } catch (error) {
      console.log("error" + error);
    }
  };

  const handleModificar = async (e) => {
    const recuperarNotas = props.notasRecuperar;
    e.preventDefault();
    // fetch(`http://localhost:1337/notes/${nuevoModificar}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     titulo: nuevoTitulo,
    //     note: nuevoNote,
    //   }),
    // })
    //   .then((request) => {
    //     request.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     recuperarNotas();
    //     alert("modificado¡¡¡");
    //   })
    //   .catch((error) => {
    //     console.log("error" + error);
    //   });
    try {
      const request = await axios.put(
        process.env.REACT_APP_BACKEND_URL + `/notes/${nuevoModificar}`,
        {
          titulo: nuevoTitulo,
          note: nuevoNote,
        }
      );
      const datos = request.data;
      console.log(datos);
      alert("modificado¡¡¡");
      recuperarNotas();
    } catch (error) {
      console.log("error" + error);
    }
  };
  return (
    <div className="nota" style={{ backgroundColor: `#${randomColor}` }}>
      <textarea value={nuevoTitulo} onChange={handleNuevoTitulo}></textarea>
      <textarea value={nuevoNote} onChange={handleNuevoNote}></textarea>
      <button
        onClick={handleEliminar}
        value={nuevoEliminar}
        onChange={handleNuevoEliminar}
      >
        Eliminar
      </button>
      <button
        onClick={handleModificar}
        value={nuevoModificar}
        onChange={handleNuevoModificar}
      >
        Modificar
      </button>
    </div>
  );
};

export default ElementoNotas;
