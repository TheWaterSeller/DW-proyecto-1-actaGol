import { roles, competiciones, estados, equipos, eventos } from "../data/datos";

export function nombreRol(rolId) {
  const rolEncontrado = roles.find((rol) => rol.id === rolId);
  if (rolEncontrado) {
    return rolEncontrado.nombre;
  }
  return "";
}

export function nombreCompeticion(competicionId) {
  const competicionEncontrada = competiciones.find(
    (competicion) => competicion.id === competicionId
  );
  if (competicionEncontrada) {
    return competicionEncontrada.nombre;
  }
  return "";
}

export function nombreEstado(estadoId) {
  const estadoEncontrado = estados.find((estado) => estado.id === estadoId);
  if (estadoEncontrado) {
    return estadoEncontrado.nombre;
  }
  return "";
}

export function buscarEquipo(equipoId) {
  return equipos.find((equipo) => equipo.id === equipoId);
}

export function formatearFecha(fecha) {
  const partes = fecha.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

export function contarGoles(partidoId, equipoId) {
  const goles = eventos.filter(
    (evento) =>
      evento.partidoId === partidoId && evento.equipoId === equipoId && evento.tipo === "gol"
  );
  return goles.length;
}
export function filtrarPartidos(listaPartidos, competicionId, estadoId) {
  return listaPartidos.filter((partido) => {
    const coincideCompeticion =
      competicionId === "todas" || partido.competicionId === competicionId;
    const coincideEstado = estadoId === "todos" || partido.estado === estadoId;
    return coincideCompeticion && coincideEstado;
  });
}