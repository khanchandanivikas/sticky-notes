import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AñadirNota from "./Components/AñadirNota";
import ListaNotas from "./Components/ListaNotas";

function App() {
  const [notas, setNotas] = useState([]);
  // const recuperarNotas = async () => {
  //   try {
  //     const request = await fetch("http://localhost:1337/notes");
  //     const datos = await request.json();
  //     console.log(datos);
  //     setNotas(datos);
  //   } catch (error) {
  //     console.log("error" + error);
  //   }
  // };
  const recuperarNotas = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/notes"
      );
      const datos = request.data;
      setNotas(datos);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    recuperarNotas();
  }, []);
  return (
    <div className="App">
      <h1>Sticky Notes</h1>
      <AñadirNota recuperarNotas={recuperarNotas} />
      <ListaNotas
        key={notas.id}
        notas={notas}
        recuperarNotas={recuperarNotas}
      />
    </div>
  );
}

export default App;
