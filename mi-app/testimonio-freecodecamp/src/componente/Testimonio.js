import React from "react";
import "../hoja de estilo/Testimonio.css";

function Testimonio(props) {
  return(
   <div className='contenedor-testimonio'>
     <img 
       className='imagen-testimonio'
       src={require(`../imagenes/gato${props.imagen}.jpg`)}
       alt='Foto de carlos'/>
     <div className='contenedor-texto-testimonio'>
      <p className="nombre-testimonio"><strong>{props.nombre}</strong> de <strong>{props.pais}</strong></p>
      <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
      <p className="texto-testimonio">"{props.testimonio}"</p>
     </div>
   </div> 
  );
}
export default Testimonio;