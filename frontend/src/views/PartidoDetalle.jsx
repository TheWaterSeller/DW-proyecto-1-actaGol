export default function PartidoDetalle({ cambiarVista, usuario, onCerrarSesion }) {
  return (
    <>
      <header>
        <h1>ActaGol</h1>
        <p>
          <strong>Usuario:</strong> {usuario?.email || "Usuario"} | <strong>Rol:</strong> {usuario?.rol || "Árbitro"} 
        </p>
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('partidos'); }}>Partidos Asignados</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onCerrarSesion(); }}>Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <h2>Detalle del Partido</h2>

        <div className="scoreboard">
          <h3>Pokemon FC vs Digimon FC</h3>
          <div className="score">0 - 0</div>
          <span className="badge badge-prog">Programado</span>
        </div>

        <div className="grid-2-cols">
          <section aria-labelledby="torneo-apertura-programado">
            <h3 id="torneo-apertura-programado">Torneo Apertura 2026</h3>

            <dl className="info-list">
              <div>
                <dt>Fecha y hora</dt>
                <dd><time dateTime="2026-10-10T15:30">10/10/2026 a las 15:30 hrs</time></dd>
              </div>

              <div>
                <dt>Cancha / Estadio</dt>
                <dd>Estadio Monumental</dd>
              </div>

              <div>
                <dt>Árbitro Asignado</dt>
                <dd>Árbitro Central</dd>
              </div>
            </dl>

            <div className="actions-group">
              <p><strong>Acciones disponibles:</strong></p>
              <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); cambiarVista('plantel'); }}>Ver plantel de los Equipos</a>
              <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('acta'); }}>
                <button type="button" style={{ width: "100%" }}>Ingresar al Acta Digital</button>
              </a>
            </div>
          </section>

          <section aria-labelledby="titulo_arbitros">
            <h3 id="titulo_arbitros">Cuerpo Arbitral Designado</h3>
            <ul className="referee-list">
              <li>
                <span className="role">Árbitro Central:</span>
                <span>David Cáceres</span>
              </li>
              <li>
                <span className="role">Árbitro Asistente 1:</span>
                <span>Jorge Perez</span>
              </li>
              <li>
                <span className="role">Árbitro Asistente 2:</span>
                <span>Martin Martinez</span>
              </li>
              <li>
                <span className="role">Cuarto Árbitro:</span>
                <span>Camila Herrera</span>
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