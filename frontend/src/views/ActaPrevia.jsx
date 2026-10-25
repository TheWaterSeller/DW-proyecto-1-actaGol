import { buscarEquipo, formatearFecha } from "../utils/partidos";

export default function ActaPrevia({ cambiarVista, partidoId, listaPartidos, listaEventos }) {
  const partido = listaPartidos.find((p) => p.id === partidoId);
  const equiposDelPartido = [buscarEquipo(partido.localId), buscarEquipo(partido.visitaId)];
  const eventosDelPartido = listaEventos.filter((evento) => evento.partidoId === partido.id);

  const amonestaciones = eventosDelPartido.filter((evento) => evento.tipo === "amarilla");
  const expulsiones = eventosDelPartido.filter((evento) => evento.tipo === "roja");
  const otrasIncidencias = eventosDelPartido.filter(
    (evento) => evento.tipo !== "gol" && evento.tipo !== "amarilla" && evento.tipo !== "roja"
  );

  function contarEventosJugador(equipoId, dorsal, tipo) {
    return eventosDelPartido.filter(
      (evento) => evento.equipoId === equipoId && evento.dorsal === dorsal && evento.tipo === tipo
    ).length;
  }

  function contarGolesEquipo(equipoId) {
    return eventosDelPartido.filter((e) => e.equipoId === equipoId && e.tipo === "gol").length;
  }

  function textoTarjeta(equipoId, dorsal) {
    if (contarEventosJugador(equipoId, dorsal, "roja") > 0) {
      return "Roja";
    }
    if (contarEventosJugador(equipoId, dorsal, "amarilla") > 0) {
      return "Amarilla";
    }
    return "Sin tarjeta";
  }

  function nombreJugador(equipoId, dorsal) {
    const equipo = buscarEquipo(equipoId);
    const jugador = equipo.jugadores.find((j) => j.dorsal === dorsal);
    if (jugador) {
      return jugador.nombre;
    }
    return "";
  }

  function mostrarIncidencias(lista) {
    if (lista.length === 0) {
      return <div className="incidencia-item">No ocurridas</div>;
    }
    return lista.map((evento) => (
      <div key={evento.id} className="incidencia-item">
        <strong>{buscarEquipo(evento.equipoId).nombre}:</strong>{" "}
        {nombreJugador(evento.equipoId, evento.dorsal)} (min {evento.minuto}&apos;)
        {evento.observacion !== "" && `: ${evento.observacion}`}
      </div>
    ));
  }

  return (
    <>
      <header>
        <h1>ActaGol</h1>
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('detalle'); }}>Volver al Detalle</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('partidos'); }}>Partidos Asignados</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <h2>Acta del Partido #{partido.id}</h2>
        
        <section>
          <h3>Partido del {formatearFecha(partido.fecha)} a las {partido.hora} hrs</h3>
          <dl className="info-list">
            <div>
              <dt>Encuentro</dt>
              <dd>{equiposDelPartido[0].nombre} vs {equiposDelPartido[1].nombre}</dd>
            </div>
            <div>
              <dt>Cancha</dt>
              <dd>{partido.cancha}</dd>
            </div>
          </dl>

          <h3>Cuerpo Arbitral</h3>
          <ul className="referee-list">
            <li><span className="role">Árbitro Central:</span> <span>{partido.arbitros.central}</span></li>
            <li><span className="role">Árbitro Asistente 1:</span> <span>{partido.arbitros.asistente1}</span></li>
            <li><span className="role">Árbitro Asistente 2:</span> <span>{partido.arbitros.asistente2}</span></li>
            <li><span className="role">Cuarto Árbitro:</span> <span>{partido.arbitros.cuarto}</span></li>
          </ul>
        </section>
        
        <section>
          <h3>Estadísticas de Jugadores</h3>
          <div className="Tablas_info">
            {equiposDelPartido.map((equipo) => {
              const capitan = equipo.jugadores.find((jugador) => jugador.dorsal === equipo.capitan);
              const tarjetasEquipo = eventosDelPartido.filter(
                (evento) =>
                  evento.equipoId === equipo.id &&
                  (evento.tipo === "amarilla" || evento.tipo === "roja")
              );

              return (
                <table key={equipo.id} className="tabla-equipo">
                  <thead>
                    <tr><th colSpan="3">{equipo.nombre}</th></tr>
                    <tr>
                      <th>Jugador</th>
                      <th>Gol</th>
                      <th>Tarjeta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipo.jugadores.map((jugador) => (
                      <tr key={jugador.dorsal}>
                        <td>{jugador.nombre}</td>
                        <td>{contarEventosJugador(equipo.id, jugador.dorsal, "gol")}</td>
                        <td>{textoTarjeta(equipo.id, jugador.dorsal)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td><strong>TOTAL</strong></td>
                      <td>{contarGolesEquipo(equipo.id)}</td>
                      <td>{tarjetasEquipo.length}</td>
                    </tr>
                    <tr><td colSpan="3">Capitán: {capitan.nombre}</td></tr>
                  </tfoot>
                </table>
              );
            })}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); cambiarVista('plantel'); }}>Ver Planteles Completos</a>
          </div>
          
          <table className="tabla-resultado">
            <caption>RESULTADO</caption>
            <thead>
              <tr>
                <th>EQUIPO</th>
                <th>{equiposDelPartido[0].nombre}</th>
                <th>{equiposDelPartido[1].nombre}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Goles</th>
                <td>{contarGolesEquipo(partido.localId)}</td>
                <td>{contarGolesEquipo(partido.visitaId)}</td>
              </tr>
            </tbody>
          </table>
        </section>
        
        <section>
          <h3>Incidencias de jugadores</h3>
          <ul className="incidencias-list">
            <li>
              Amonestaciones
              {mostrarIncidencias(amonestaciones)}
            </li>
            <li>
              Expulsiones
              {mostrarIncidencias(expulsiones)}
            </li>
            <li>
              Otras incidencias
              {mostrarIncidencias(otrasIncidencias)}
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p><small>&copy; 2026 ActaGol - Sistema de Registro Arbitral.</small></p>
      </footer>
    </>
  );
}
