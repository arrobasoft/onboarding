import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListasDeTareas.css";
import Tareas from "./Tareas";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const AgregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizada = [tarea, ...tareas];
      setTareas(tareasActualizada);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizada = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizada);
  };

  const completarTarea = (id) => {
    const tareasActualizada = tareas.map((tareas) => {
      if (tareas.id === id) {
        tareas.completada = !tareas.completada;
      }
      return tareas;
    });
    setTareas(tareasActualizada);
  };

  return (
    <>
      <TareaFormulario onSubmit={AgregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tareas
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
