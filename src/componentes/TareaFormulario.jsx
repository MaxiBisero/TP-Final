import React, { useState } from "react";
import "../hojas-de-estilo/componentes/_TareaFormulario.scss";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    }; props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe aqui tu tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">+</button>
    </form>
  );
}
export default TareaFormulario;
