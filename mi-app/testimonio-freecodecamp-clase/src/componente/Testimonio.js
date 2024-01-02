import React from "react";
import "../hoja de estilo/Testimonio.css";

class Testimonio extends React.component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imagenes/gato${this.props.imagen}.jpg`)}
          alt="Foto de carlos"
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{this.props.nombre}</strong> de{" "}
            <strong>{this.props.pais}</strong>
          </p>
          <p className="cargo-testimonio">
            {this.props.cargo} en {this.props.empresa}
          </p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;
