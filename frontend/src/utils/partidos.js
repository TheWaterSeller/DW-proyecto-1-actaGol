import { competiciones, equipos, estados, tiposEvento } from "../data/datos";

export function buscarEquipo(equipoId) {
  return equipos.find((equipo) => equipo.id === equipoId);
}

export function buscarJugador(equipoId, dorsal) {
  return buscarEquipo(equipoId)?.jugadores.find((jugador) => jugador.dorsal === dorsal);
}

export function nombreCompeticion(competicionId) {
  return competiciones.find((competicion) => competicion.id === competicionId)?.nombre ?? "";
}

export function nombreEstado(estadoId) {
  return estados.find((estado) => estado.id === estadoId)?.nombre ?? "";
}

export function nombreTipoEvento(tipoId) {
  return tiposEvento.find((tipo) => tipo.id === tipoId)?.nombre ?? "";
}

export function formatearFecha(fecha) {
  const [anio, mes, dia] = fecha.split("-");
  return `${dia}/${mes}/${anio}`;
}

export function eventosDelPartido(partidoId, eventos) {
  return eventos
    .filter((evento) => evento.partidoId === partidoId)
    .sort((a, b) => a.periodo - b.periodo || a.minuto - b.minuto);
}

export function calcularMarcador(partido, eventos) {
  const goles = eventos.filter(
    (evento) => evento.partidoId === partido.id && evento.tipo === "gol"
  );
  return {
    local: goles.filter((gol) => gol.equipoId === partido.localId).length,
    visita: goles.filter((gol) => gol.equipoId === partido.visitaId).length,
  };
}
