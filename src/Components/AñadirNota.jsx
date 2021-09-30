import React from "react";
import "../Style/AñadirNota.css";
import axios from "axios";
import { useState } from "react";

const AñadirNota = (props) => {
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevoNote, setNuevoNote] = useState("");
  const handleNuevoTitulo = (e) => {
    setNuevoTitulo(e.target.value);
  };
  const handleNuevoNote = (e) => {
    setNuevoNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    const notasRecuperar = props.recuperarNotas;
    e.preventDefault();
    // await fetch("http://localhost:1337/notes", {
    //   method: "POST",
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
    //     notasRecuperar();
    //     alert("añadido¡¡¡")
    //   })
    //   .catch((error) => {
    //     console.log("error" + error);
    //   });
    try {
      const request = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/notes",
        {
          titulo: nuevoTitulo,
          note: nuevoNote,
        }
      );
      console.log(request.data);
      notasRecuperar();
      alert("añadido¡¡¡");
    } catch (error) {
      console.log("error" + error);
    }
    setNuevoTitulo("");
    setNuevoNote("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={nuevoTitulo}
          onChange={handleNuevoTitulo}
          placeholder="titulo del nota"
          required
        />
        <input
          type="text"
          name="note"
          id="note"
          value={nuevoNote}
          onChange={handleNuevoNote}
          placeholder="nota"
          required
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AñadirNota;
