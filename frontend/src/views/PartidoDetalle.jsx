import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  nombreCompeticion,
  nombreEstado,
  buscarEquipo,
  formatearFecha,
} from "../utils/partidos";
import { useState } from "react";

export default function PartidoDetalle({ cambiarVista, usuario, onCerrarSesion, partidoId, listaPartidos, setListaPartidos, listaEventos, setListaEventos }) {
  const partido = listaPartidos.find((p) => p.id === partidoId);
  const local = buscarEquipo(partido.localId);
  const visita = buscarEquipo(partido.visitaId);

  // Estados para el formulario de eventos
  const [minuto, setMinuto] = useState("");
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(local.id);
  const [dorsal, setDorsal] = useState("");
  const [tipoEvento, setTipoEvento] = useState("gol");
  const [observacion, setObservacion] = useState("");

  // Cálculo de goles en tiempo real
  const golesLocal = listaEventos.filter(e => e.partidoId === partido.id && e.equipoId === local.id && e.tipo === "gol").length;
  const golesVisita = listaEventos.filter(e => e.partidoId === partido.id && e.equipoId === visita.id && e.tipo === "gol").length;

  const manejarCambioEstado = (nuevoEstado) => {
    const nuevaLista = listaPartidos.map((p) => 
      p.id === partidoId ? { ...p, estado: nuevoEstado } : p
    );
    setListaPartidos(nuevaLista);
  };

  const registrarEvento = (e) => {
    e.preventDefault();
    if (!minuto || !dorsal) return;

    const nuevoEvento = {
      id: Date.now(), // Genera un ID único temporal
      partidoId: partido.id,
      minuto: parseInt(minuto),
      tipo: tipoEvento,
      equipoId: equipoSeleccionado,
      dorsal: parseInt(dorsal),
      observacion: observacion
    };
    
    setListaEventos([...listaEventos, nuevoEvento]);
    
    // Limpia el formulario
    setMinuto("");
    setDorsal("");
    setObservacion("");
  };

  const jugadoresEquipoActual = equipoSeleccionado === local.id ? local.jugadores : visita.jugadores;

  return (
    <>
      <Header usuario={usuario} cambiarVista={cambiarVista} onCerrarSesion={onCerrarSesion} />

      <main className="main-container">
        <h2>Detalle del Partido #{partido.id}</h2>

        <div className="scoreboard">
          <h3>{local.nombre} vs {visita.nombre}</h3>
          {partido.estado !== "programado" && (
            <div className="score">
              {golesLocal} - {golesVisita}
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
              {/* Botones condicionales según el estado del partido */}
              {partido.estado === "programado" && (
                <button 
                  type="button" 
                  style={{ width: "100%", marginBottom: "10px", backgroundColor: "#3b82f6", borderColor: "#3b82f6" }} 
                  onClick={() => manejarCambioEstado("en-curso")}
                >
                  Iniciar Partido
                </button>
              )}

              {partido.estado === "en-curso" && (
                <button 
                  type="button" 
                  style={{ width: "100%", marginBottom: "10px", backgroundColor: "#ef4444", borderColor: "#ef4444" }} 
                  onClick={() => manejarCambioEstado("finalizado")}
                >
                  Cerrar Encuentro
                </button>
              )}

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

            {/* Formulario de registro de eventos - Solo visible En Curso */}
            {partido.estado === "en-curso" && (
              <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <h3 style={{ fontSize: "16px", marginBottom: "12px", color: "#a78bfa" }}>Registrar Evento</h3>
                <form onSubmit={registrarEvento} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <select 
                      value={equipoSeleccionado} 
                      onChange={(e) => { setEquipoSeleccionado(e.target.value); setDorsal(""); }}
                      style={{ flex: 1 }}
                    >
                      <option value={local.id}>{local.nombre}</option>
                      <option value={visita.id}>{visita.nombre}</option>
                    </select>
                    
                    <input 
                      type="number" 
                      placeholder="Min" 
                      value={minuto} 
                      onChange={(e) => setMinuto(e.target.value)}
                      style={{ width: "70px" }}
                      required
                    />
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <select 
                      value={dorsal} 
                      onChange={(e) => setDorsal(e.target.value)} 
                      style={{ flex: 1 }}
                      required
                    >
                      <option value="" disabled>Seleccionar Jugador</option>
                      {jugadoresEquipoActual.map(j => (
                        <option key={j.dorsal} value={j.dorsal}>#{j.dorsal} - {j.nombre}</option>
                      ))}
                    </select>

                    <select 
                      value={tipoEvento} 
                      onChange={(e) => setTipoEvento(e.target.value)}
                      style={{ flex: 1 }}
                    >
                      <option value="gol">Gol</option>
                      <option value="amarilla">T. Amarilla</option>
                      <option value="roja">T. Roja</option>
                    </select>
                  </div>

                  <input 
                    type="text" 
                    placeholder="Observaciones (opcional)" 
                    value={observacion} 
                    onChange={(e) => setObservacion(e.target.value)}
                  />
                  
                  <button type="submit" style={{ backgroundColor: "#10b981", borderColor: "#10b981" }}>Agregar Evento</button>
                </form>
              </div>
            )}



          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
