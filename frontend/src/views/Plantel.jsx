export default function Plantel({ cambiarVista }) {
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
        <h2>Planteles Oficiales</h2>

        <div className="grid-2-cols grid-equitativa">
          <section>
            <h3 className="equipo-titulo">POKEMON FC</h3>
            <table className="tabla_plantel">
              <thead>
                <tr><th colSpan="2">Titulares</th></tr>
                <tr>
                  <th>Dorsal</th>
                  <th>Nombre Jugador</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Rodrigo Salinas</td></tr>
                <tr><td>2</td><td>Tomás Contreras</td></tr>
                <tr><td>3</td><td>Felipe Morales</td></tr>
                <tr><td>4</td><td>Nicolás Ibarra</td></tr>
                <tr><td>5</td><td>Diego Fuenzalida</td></tr>
                <tr><td>6</td><td>Benjamín Cárdenas</td></tr>
                <tr><td>7</td><td>Sebastián Herrera</td></tr>
                <tr><td>8</td><td>Joaquín Toledo</td></tr>
                <tr><td>9</td><td>Matías Riquelme</td></tr>
                <tr><td>10</td><td>Andrés Vergara</td></tr>
                <tr><td>11</td><td>Cristóbal Bravo</td></tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Capitan:</th>
                  <td>R.Salinas</td>
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
                <tr><td>12</td><td>Pablo Lagos</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="equipo-titulo">DIGIMON FC</h3>
            <table className="tabla_plantel">
              <thead>
                <tr><th colSpan="2">Titulares</th></tr>
                <tr>
                  <th>Dorsal</th>
                  <th>Nombre Jugador</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Lucas Espinoza</td></tr>
                <tr><td>2</td><td>Gabriel Muñoz</td></tr>
                <tr><td>3</td><td>Emilio Rojas</td></tr>
                <tr><td>4</td><td>Ignacio Sepúlveda</td></tr>
                <tr><td>5</td><td>Vicente Alarcón</td></tr>
                <tr><td>6</td><td>Hernán Cortés</td></tr>
                <tr><td>7</td><td>Kevin Reyes</td></tr>
                <tr><td>8</td><td>Oscar Godoy</td></tr>
                <tr><td>9</td><td>Francisco Bustos</td></tr>
                <tr><td>10</td><td>Nicolás Parra</td></tr>
                <tr><td>11</td><td>Diego Correa</td></tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Capitan:</th>
                  <td>I.Sepúlveda</td>
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
                <tr><td>12</td><td>William Aguirre</td></tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
      
      <footer>
        <p><small>&copy; 2026 ActaGol - Sistema de Registro Arbitral.</small></p>
      </footer>
    </>
  );
}