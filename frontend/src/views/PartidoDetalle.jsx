import { partidos } from "../data/datos";
import {
  nombreRol,
  nombreCompeticion,
  nombreEstado,
  buscarEquipo,
  formatearFecha,
  contarGoles,
} from "../utils/partidos";

export default function PartidoDetalle({ cambiarVista, usuario, onCerrarSesion, partidoId }) {
  const partido = partidos.find((p) => p.id === partidoId);
  const local = buscarEquipo(partido.localId);
  const visita = buscarEquipo(partido.visitaId);

  return (
    <>
      <header>
        <h1>ActaGol</h1>
        <p>
          <strong>Usuario:</strong> {usuario.email} | <strong>Rol:</strong> {nombreRol(usuario.rol)}
        </p>
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('partidos'); }}>Partidos Asignados</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onCerrarSesion(); }}>Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <h2>Detalle del Partido #{partido.id}</h2>

        <div className="scoreboard">
          <h3>{local.nombre} vs {visita.nombre}</h3>
          {partido.estado !== "programado" && (
            <div className="score">
              {contarGoles(partido.id, partido.localId)} - {contarGoles(partido.id, partido.visitaId)}
            </div>
          )}
          <span className={partido.estado === "programado" ? "badge badge-prog" : "badge"}>
            {nombreEstado(partido.estado)}
          </span>
        </div>

        <div className="grid-2-cols">
          <section aria-labelledby="titulo-competicion">
            <h3 id="titulo-competicion">{nombreCompeticion(partido.competicionId)}</h3>

            <dl className="info-list">
              <div>
                <dt>Fecha y hora</dt>
                <dd>
                  <time dateTime={`${partido.fecha}T${partido.hora}`}>
                    {formatearFecha(partido.fecha)} a las {partido.hora} hrs
                  </time>
                </dd>
              </div>

              <div>
                <dt>Cancha / Estadio</dt>
                <dd>{partido.cancha}</dd>
              </div>

              <div>
                <dt>Árbitro central</dt>
                <dd>{partido.arbitros.central}</dd>
              </div>
            </dl>

            <div className="actions-group">
              <p><strong>Acciones disponibles:</strong></p>
              <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); cambiarVista('plantel'); }}>Ver plantel de los Equipos</a>
              <button type="button" style={{ width: "100%" }} onClick={() => cambiarVista('acta')}>
                Ingresar al Acta Digital
              </button>
            </div>
          </section>

          <section aria-labelledby="titulo_arbitros">
            <h3 id="titulo_arbitros">Cuerpo Arbitral Designado</h3>
            <ul className="referee-list">
              <li>
                <span className="role">Árbitro Central:</span>
                <span>{partido.arbitros.central}</span>
              </li>
              <li>
                <span className="role">Árbitro Asistente 1:</span>
                <span>{partido.arbitros.asistente1}</span>
              </li>
              <li>
                <span className="role">Árbitro Asistente 2:</span>
                <span>{partido.arbitros.asistente2}</span>
              </li>
              <li>
                <span className="role">Cuarto Árbitro:</span>
                <span>{partido.arbitros.cuarto}</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p><small>&copy; 2026 ActaGol - Sistema de Registro Arbitral.</small></p>
      </footer>
    </>
  );
}
