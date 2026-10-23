import { partidosIniciales, eventosIniciales } from "./data/datos";
import {
  buscarEquipo,
  buscarJugador,
  nombreCompeticion,
  nombreEstado,
  nombreTipoEvento,
  formatearFecha,
  eventosDelPartido,
  calcularMarcador,
} from "./utils/partidos";
import "./App.css";

function App() {
  const partidoEjemplo = partidosIniciales.find((partido) => partido.id === 98);
  const cronologia = eventosDelPartido(partidoEjemplo.id, eventosIniciales);

  return (
    <main>
      <h1>ActaGol</h1>

      <section>
        <h2>Partidos de prueba</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Competición</th>
              <th scope="col">Fecha y hora</th>
              <th scope="col">Cancha</th>
              <th scope="col">Partido</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {partidosIniciales.map((partido) => {
              const marcador = calcularMarcador(partido, eventosIniciales);
              return (
                <tr key={partido.id}>
                  <td>#{partido.id}</td>
                  <td>{nombreCompeticion(partido.competicionId)}</td>
                  <td>
                    {formatearFecha(partido.fecha)} {partido.hora}
                  </td>
                  <td>{partido.cancha}</td>
                  <td>
                    <strong>{buscarEquipo(partido.localId).nombre}</strong> {marcador.local} -{" "}
                    {marcador.visita} <strong>{buscarEquipo(partido.visitaId).nombre}</strong>
                  </td>
                  <td>{nombreEstado(partido.estado)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section>
        <h2>
          Cronología del partido #{partidoEjemplo.id}:{" "}
          {buscarEquipo(partidoEjemplo.localId).nombre} vs{" "}
          {buscarEquipo(partidoEjemplo.visitaId).nombre}
        </h2>
        <ol>
          {cronologia.map((evento) => (
            <li key={evento.id}>
              {evento.minuto}' ({evento.periodo}.º tiempo) · {nombreTipoEvento(evento.tipo)} ·{" "}
              {buscarJugador(evento.equipoId, evento.dorsal).nombre} (
              {buscarEquipo(evento.equipoId).nombre})
              {evento.observacion && ` · ${evento.observacion}`}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default App;
