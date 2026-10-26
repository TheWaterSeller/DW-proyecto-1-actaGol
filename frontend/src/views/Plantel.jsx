import Header from "../components/Header";
import Footer from "../components/Footer";
import { buscarEquipo } from "../utils/partidos";

export default function Plantel({ cambiarVista, usuario, onCerrarSesion, partidoId, listaPartidos }) {
  const partido = listaPartidos.find((p) => p.id === partidoId);
  const equiposDelPartido = [buscarEquipo(partido.localId), buscarEquipo(partido.visitaId)];

  return (
    <>
      <Header usuario={usuario} cambiarVista={cambiarVista} onCerrarSesion={onCerrarSesion} />

      <main className="main-container">
        <a href="#" className="btn-secondary enlace-volver" onClick={(e) => { e.preventDefault(); cambiarVista('detalle'); }}>Volver al Detalle</a>
        <h2>Planteles Oficiales</h2>

        <div className="grid-2-cols grid-equitativa">
          {equiposDelPartido.map((equipo) => {
            const titulares = equipo.jugadores.filter((jugador) => jugador.titular);
            const suplentes = equipo.jugadores.filter((jugador) => !jugador.titular);
            const capitan = equipo.jugadores.find((jugador) => jugador.dorsal === equipo.capitan);

            return (
              <section key={equipo.id}>
                <h3 className="equipo-titulo">{equipo.nombre}</h3>
                <table className="tabla_plantel">
                  <thead>
                    <tr><th colSpan="2">Titulares</th></tr>
                    <tr>
                      <th>Dorsal</th>
                      <th>Nombre Jugador</th>
                    </tr>
                  </thead>
                  <tbody>
                    {titulares.map((jugador) => (
                      <tr key={jugador.dorsal}>
                        <td>{jugador.dorsal}</td>
                        <td>{jugador.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Capitán:</th>
                      <td>{capitan.nombre}</td>
                    </tr>
                  </tfoot>
                </table>

                <table className="tabla_plantel">
                  <thead>
                    <tr><th colSpan="2">Suplentes</th></tr>
                    <tr>
                      <th>Dorsal</th>
                      <th>Nombre Jugador</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suplentes.map((jugador) => (
                      <tr key={jugador.dorsal}>
                        <td>{jugador.dorsal}</td>
                        <td>{jugador.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
