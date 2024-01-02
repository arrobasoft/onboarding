import './App.css';
import Testimonio from './componente/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
       <h1>Esto es lo que dicen nuestros evasores de impuestos</h1>
       <Testimonio 
       nombre='Carlos COITO'
       pais='COCAcolombia'
       imagen='1'
       cargo='Ingeniero'
       empresa='Evacion de Impuestos'
       testimonio='La verdad es que el sistema fiscal es tan complicado y los impuestos son tan altos que siento que estoy en mi derecho de buscar formas de reducir mi carga tributaria. Todos hacen trucos fiscales de alguna manera, ¿no? Solo estoy siendo inteligente y asegurándome de que mi dinero se quede donde pertenece: en mi bolsillo.'/>
      <Testimonio
      nombre='Perez'
      pais='SCHOOL SHOTHING'
      imagen='2'
      cargo='Experto'
      empresa='Fraude Fiscal'
      testimonio='Considero que los impuestos son necesarios, pero a veces siento que la carga fiscal es excesiva. Me encantaría ver una mayor transparencia en cómo se utilizan los fondos públicos y una simplificación del sistema tributario para que sea más comprensible para todos.(no paga nada)'/>
      </div>
    </div>
  );
}

export default App;
