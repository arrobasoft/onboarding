import "./App.css";
import imagenes from "./imagenes/Sin título23.png";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img src={imagenes} className="logo" />
      </div>
      <div className="tareas-lista-princila">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
