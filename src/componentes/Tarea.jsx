import React from "react";
import "../hojas-de-estilo/componentes/_Tarea.scss";
import { AiOutlineDelete } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"      }
    >
      <div className="input-check">
        <input type="checkbox" onClick={() => completarTarea(id)} /></div>
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}
      >
        <AiOutlineDelete className="tarea-icono" />
      </div>
    </div>
  );
} export default Tarea;
