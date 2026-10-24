export default function ActaPrevia({ cambiarVista }) {
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
        <h2>Acta Del Partido</h2>
        
        <section>
          <h3>Partido realizado el 10 de Octubre del 2026</h3>
          <dl className="info-list">
            <div>
              <dt>Encuentro</dt>
              <dd>POKEMON FC vs DIGIMON FC</dd>
            </div>
          </dl>

          <h3>Cuerpo Arbitral</h3>
          <ul className="referee-list">
            <li><span className="role">Árbitro Central:</span> <span>David Cáceres</span></li>
            <li><span className="role">Árbitro Asistente 1:</span> <span>Jorge Perez</span></li>
            <li><span className="role">Árbitro Asistente 2:</span> <span>Martin Martinez</span></li>
            <li><span className="role">Cuarto Árbitro:</span> <span>Camila Herrera</span></li>
          </ul>
        </section>
        
        <section>
          <h3>Estadísticas de Jugadores</h3>
          <div className="Tablas_info">
            <table className="tabla-equipo">
              <thead>
                <tr><th colSpan="3">POKEMON FC</th></tr>
                <tr>
                  <th>Jugador</th>
                  <th>Gol</th>
                  <th>Tarjeta</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>R. Salinas</td><td>1</td><td>Sin tarjeta</td></tr>
                <tr><td>T. Contreras</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>F. Morales</td><td>0</td><td>Amarilla</td></tr>
                <tr><td>N. Ibarra</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>D. Fuenzalida</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>B. Cárdenas</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>S. Herrera</td><td>1</td><td>Sin tarjeta</td></tr>
                <tr><td>J. Toledo</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>M. Riquelme</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>A. Vergara</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>C. Bravo</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>P. Lagos</td><td>0</td><td>Sin tarjeta</td></tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>TOTAL</strong></td>
                  <td>2</td>
                  <td>1</td>
                </tr>
                <tr><td colSpan="3">Capitán: R. Salinas</td></tr>
              </tfoot>
            </table>
          
            <table className="tabla-equipo">
              <thead>
                <tr><th colSpan="3">Equipo: DIGIMON FC</th></tr>
                <tr>
                  <th>Jugador</th>
                  <th>Gol</th>
                  <th>Tarjeta</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>L. Espinoza</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>G. Muñoz</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>E. Rojas</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>I. Sepúlveda</td><td>1</td><td>Sin tarjeta</td></tr>
                <tr><td>V. Alarcón</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>H. Cortés</td><td>0</td><td>Amarilla</td></tr>
                <tr><td>K. Reyes</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>O. Godoy</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>F. Bustos</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>N. Parra</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>D. Correa</td><td>0</td><td>Sin tarjeta</td></tr>
                <tr><td>W. Aguirre</td><td>0</td><td>Sin tarjeta</td></tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>TOTAL</strong></td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr><td colSpan="3">Capitán: I. Sepúlveda</td></tr>
              </tfoot>
            </table>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); cambiarVista('plantel'); }}>Ver Planteles Completos</a>
          </div>
          
          <table className="tabla-resultado">
            <caption>RESULTADO FINAL</caption>
            <thead>
              <tr>
                <th>EQUIPO</th>
                <th>POKEMON FC</th>
                <th>DIGIMON FC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Goles</th>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </section>
        
        <section>
          <h3>Incidencias de jugadores</h3>
          <ul className="incidencia-list">
            <li>
              Amonestaciones
              <div className="incidencia-item">
                <strong>POKEMON FC:</strong> F. Morales → Amarilla (min 22'): falta táctica sobre un rival en avance.
              </div>
              <div className="incidencia-item">
                <strong>DIGIMON FC:</strong> H. Cortés → Amarilla (min 68'): protesta al árbitro por una decisión.
              </div>
            </li>
            <li>
              Expulsiones
              <div className="incidencia-item">NO OCURRIDAS</div>
            </li>
            <li>
              Otras incidencias
              <div className="incidencia-item">NO OCURRIDAS</div>
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