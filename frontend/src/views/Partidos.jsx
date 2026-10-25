import { useState } from "react";
import { competiciones, estados } from "../data/datos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  nombreCompeticion,
  nombreEstado,
  buscarEquipo,
  formatearFecha,
  filtrarPartidos,
} from "../utils/partidos";

export default function Partidos({ cambiarVista, usuario, onCerrarSesion, listaPartidos }) {
  const [filtroCompeticion, setFiltroCompeticion] = useState("todas");
  const [filtroEstado, setFiltroEstado] = useState("todos");

  const partidosFiltrados = filtrarPartidos(listaPartidos, filtroCompeticion, filtroEstado);

  const limpiarFiltros = () => {
    setFiltroCompeticion("todas");
    setFiltroEstado("todos");
  };

  return (
    <>
      <Header usuario={usuario} cambiarVista={cambiarVista} onCerrarSesion={onCerrarSesion} />

      <main className="main-container">
        <section>
          <h2>Mis Partidos Asignados</h2>
          <p>Bienvenido. Aquí puedes consultar los encuentros programados para tu jornada.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Filtrar partidos</legend>

              <label htmlFor="filtro-competicion">Competición:</label>
              <select
                id="filtro-competicion"
                name="competicion"
                value={filtroCompeticion}
                onChange={(e) => setFiltroCompeticion(e.target.value)}
              >
                <option value="todas">Todas las competiciones</option>
                {competiciones.map((competicion) => (
                  <option key={competicion.id} value={competicion.id}>
                    {competicion.nombre}
                  </option>
                ))}
              </select>

              <label htmlFor="filtro-estado">Estado:</label>
              <select
                id="filtro-estado"
                name="estado"
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
              >
                <option value="todos">Todos los estados</option>
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.id}>
                    {estado.nombre}
                  </option>
                ))}
              </select>

              <button type="button" onClick={limpiarFiltros}>Limpiar filtros</button>
            </fieldset>
          </form>
        </section>

        <section>
          <h3>Listado de Encuentros ({partidosFiltrados.length})</h3>
          <table>
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
              {partidosFiltrados.length === 0 && (
                <tr>
                  <td colSpan="8">No hay partidos que coincidan con los filtros seleccionados.</td>
                </tr>
              )}
              {partidosFiltrados.map((partido) => (
                <tr key={partido.id}>
                  <td>#{partido.id}</td>
                  <td>{nombreCompeticion(partido.competicionId)}</td>
                  <td>{formatearFecha(partido.fecha)} {partido.hora}</td>
                  <td>{partido.cancha}</td>
                  <td>
                    <strong>{buscarEquipo(partido.localId).nombre}</strong> vs.{" "}
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

      <Footer />
    </>
  );
}