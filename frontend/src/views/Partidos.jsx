import { competiciones, estados } from "../data/datos";
import {
  nombreRol,
  nombreCompeticion,
  nombreEstado,
  buscarEquipo,
  formatearFecha,
  contarGoles,
} from "../utils/partidos";

export default function Partidos({ cambiarVista, usuario, onCerrarSesion, listaPartidos }) {
  return (
    <>
      <header>
        <h1>ActaGol</h1>
        <p>
          <strong>Usuario:</strong> {usuario.email} | <strong>Rol:</strong> {nombreRol(usuario.rol)}
        </p>
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('coordinador'); }}>Programar Partido</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('partidos'); }}>Partidos Asignados</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onCerrarSesion(); }}>Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <section>
          <h2>Mis Partidos Asignados</h2>
          <p>Bienvenido. Aquí puedes consultar los encuentros programados para tu jornada.</p>

          <form action="#" method="get" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Filtrar partidos</legend>
              
              <label htmlFor="filtro-competicion">Competición:</label>
              <select id="filtro-competicion" name="competicion">
                <option value="todas">Todas las competiciones</option>
                {competiciones.map((competicion) => (
                  <option key={competicion.id} value={competicion.id}>
                    {competicion.nombre}
                  </option>
                ))}
              </select>

              <label htmlFor="filtro-estado">Estado:</label>
              <select id="filtro-estado" name="estado">
                <option value="todos">Todos los estados</option>
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.id}>
                    {estado.nombre}
                  </option>
                ))}
              </select>

              <button type="submit">Filtrar</button>
            </fieldset>
          </form>
        </section>

        <section>
          <h3>Listado de Encuentros</h3>
          <table border="1">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Competición</th>
                <th scope="col">Fecha y Hora</th>
                <th scope="col">Cancha</th>
                <th scope="col">Equipos</th>
                <th scope="col">Árbitro central</th>
                <th scope="col">Estado</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {listaPartidos.map((partido) => (
                <tr key={partido.id}>
                  <td>#{partido.id}</td>
                  <td>{nombreCompeticion(partido.competicionId)}</td>
                  <td>{formatearFecha(partido.fecha)} {partido.hora}</td>
                  <td>{partido.cancha}</td>
                  <td>
                    <strong>{buscarEquipo(partido.localId).nombre}</strong>
                    {partido.estado === "programado"
                      ? " vs. "
                      : ` ${contarGoles(partido.id, partido.localId)} - ${contarGoles(partido.id, partido.visitaId)} `}
                    <strong>{buscarEquipo(partido.visitaId).nombre}</strong>
                  </td>
                  <td>{partido.arbitros.central}</td>
                  <td>{nombreEstado(partido.estado)}</td>
                  <td>
                    {partido.estado === "finalizado" ? (
                      <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('acta', partido.id); }}>Ver acta digital</a>
                    ) : (
                      <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('detalle', partido.id); }}>Ver detalle</a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p><small>&copy; 2026 ActaGol - Sistema de Registro Arbitral.</small></p>
      </footer>
    </>
  );
}
