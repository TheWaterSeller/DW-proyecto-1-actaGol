import { useState } from "react";
import Partidos from "./Partidos";
import PartidoDetalle from "./PartidoDetalle";
import ActaPrevia from "./ActaPrevia";
import Plantel from "./Plantel";

export default function VistaGeneral({ usuario, onCerrarSesion }) {
  const [vistaActual, setVistaActual] = useState("partidos");
  const [partidoId, setPartidoId] = useState(null);

  const cambiarVista = (vista, id) => {
    setVistaActual(vista);
    if (id !== undefined) {
      setPartidoId(id);
    }
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
          partidoId={partidoId}
        />
      )}
      {vistaActual === "acta" && (
        <ActaPrevia 
          cambiarVista={cambiarVista} 
          partidoId={partidoId}
        />
      )}
      {vistaActual === "plantel" && (
        <Plantel 
          cambiarVista={cambiarVista} 
          partidoId={partidoId}
        />
      )}
    </>
  );
}
