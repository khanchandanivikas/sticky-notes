import React from "react";
import "../Style/Notas.css";
import ElementoNotas from "./ElementoNotas";

const ListaNotas = (props) => {
  const notasRecuperar = props.recuperarNotas;
  return (
    <div className="notas">
      {props.notas.map((element) => {
        return (
          <ElementoNotas
            key={element.id}
            element={element}
            notasRecuperar={notasRecuperar}
          />
        );
      })}
    </div>
  );
};

export default ListaNotas;
