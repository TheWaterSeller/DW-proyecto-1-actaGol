import { useState } from "react";
import Partidos from "./Partidos";
import PartidoDetalle from "./PartidoDetalle";
import ActaPrevia from "./ActaPrevia";
import Plantel from "./Plantel";

export default function VistaGeneral({ usuario, onCerrarSesion }) {
  const [vistaActual, setVistaActual] = useState("partidos");

  const cambiarVista = (vista) => {
    setVistaActual(vista);
  };

  return (
    <>
      {vistaActual === "partidos" && (
        <Partidos 
          cambiarVista={cambiarVista} 
          usuario={usuario} 
          onCerrarSesion={onCerrarSesion} 
        />
      )}
      {vistaActual === "detalle" && (
        <PartidoDetalle 
          cambiarVista={cambiarVista} 
          usuario={usuario} 
          onCerrarSesion={onCerrarSesion} 
        />
      )}
      {vistaActual === "acta" && (
        <ActaPrevia 
          cambiarVista={cambiarVista} 
        />
      )}
      {vistaActual === "plantel" && (
        <Plantel 
          cambiarVista={cambiarVista} 
        />
      )}
    </>
  );
}