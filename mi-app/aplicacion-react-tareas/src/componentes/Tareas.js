import React from "react";
import "../hojas-de-estilo/Tareas.css";
import { AiOutlineClose } from "react-icons/ai";

function Tareas({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-icono">
        <AiOutlineClose
          className="tarea-icono"
          onClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  );
}

export default Tareas;
