import { useState } from "react";
import { competiciones, equipos } from "../data/datos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PanelCoordinador({ cambiarVista, usuario, onCerrarSesion, listaPartidos, setListaPartidos }) {
  const [competicion, setCompeticion] = useState(competiciones[0].id);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [cancha, setCancha] = useState("");
  const [local, setLocal] = useState(equipos[0].id);
  const [visita, setVisita] = useState(equipos[1].id);
  const [central, setCentral] = useState("");

  const crearPartido = (e) => {
    e.preventDefault();
    if (local === visita) return alert("Un equipo no puede jugar contra sí mismo.");

    const nuevoPartido = {
      id: Date.now(), // ID único temporal
      competicionId: competicion,
      fecha,
      hora,
      cancha,
      localId: local,
      visitaId: visita,
      estado: "programado",
      arbitros: {
        central: central,
        asistente1: "Sin designar",
        asistente2: "Sin designar",
        cuarto: "Sin designar",
      },
    };

    setListaPartidos([...listaPartidos, nuevoPartido]);
    cambiarVista("partidos"); // Devuelve al listado principal tras guardar
  };

  return (
    <>
      <Header usuario={usuario} cambiarVista={cambiarVista} onCerrarSesion={onCerrarSesion} />
      <main className="main-container">
        <section style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2>Programar Nuevo Partido</h2>
          <form onSubmit={crearPartido} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
            
            <div>
              <label>Competición:</label>
              <select value={competicion} onChange={(e) => setCompeticion(e.target.value)}>
                {competiciones.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
              </select>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <label>Fecha:</label>
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
              </div>
              <div style={{ flex: 1 }}>
                <label>Hora:</label>
                <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
              </div>
            </div>

            <div>
              <label>Cancha:</label>
              <input type="text" value={cancha} onChange={(e) => setCancha(e.target.value)} required />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <label>Local:</label>
                <select value={local} onChange={(e) => setLocal(e.target.value)}>
                  {equipos.map(eq => <option key={eq.id} value={eq.id}>{eq.nombre}</option>)}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label>Visita:</label>
                <select value={visita} onChange={(e) => setVisita(e.target.value)}>
                  {equipos.map(eq => <option key={eq.id} value={eq.id}>{eq.nombre}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label>Árbitro Central:</label>
              <input type="text" value={central} onChange={(e) => setCentral(e.target.value)} required />
            </div>

            <button type="submit" style={{ marginTop: "10px" }}>Programar Partido</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}