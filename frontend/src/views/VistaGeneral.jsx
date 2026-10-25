import { useState } from "react";
import Partidos from "./Partidos";
import PartidoDetalle from "./PartidoDetalle";
import ActaPrevia from "./ActaPrevia";
import Plantel from "./Plantel";
import {partidos as datosPartidos, eventos as datosEventos} from "../data/datos";
import PanelCoordinador from "./PanelCoordinador";

export default function VistaGeneral({ usuario, onCerrarSesion }) {
  const [vistaActual, setVistaActual] = useState("partidos");
  const [partidoId, setPartidoId] = useState(null);

  const [listaPartidos, setListaPartidos] = useState(datosPartidos);
  const [listaEventos, setListaEventos] = useState(datosEventos);

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
          listaPartidos={listaPartidos}
        />
      )}
      {vistaActual === "detalle" && (
        <PartidoDetalle 
          cambiarVista={cambiarVista} 
          usuario={usuario} 
          onCerrarSesion={onCerrarSesion} 
          partidoId={partidoId}
          listaPartidos={listaPartidos}
          setListaPartidos={setListaPartidos}
          listaEventos={listaEventos}
          setListaEventos={setListaEventos}
        />
      )}
      {vistaActual === "acta" && (
        <ActaPrevia 
          cambiarVista={cambiarVista} 
          partidoId={partidoId}
          listaPartidos={listaPartidos}
          listaEventos={listaEventos}
        />
      )}
      {vistaActual === "plantel" && (
        <Plantel 
          cambiarVista={cambiarVista} 
          partidoId={partidoId}
          listaPartidos={listaPartidos}
        />
      )}
      {vistaActual === "coordinador" && (
        <PanelCoordinador 
          cambiarVista={cambiarVista} 
          usuario={usuario} 
          onCerrarSesion={onCerrarSesion}
          listaPartidos={listaPartidos}
          setListaPartidos={setListaPartidos}
        />
      )}
    </>
  );
}
