export default function Partidos({ cambiarVista, usuario, onCerrarSesion }) {
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
        <section>
          <h2>Mis Partidos Asignados</h2>
          <p>Bienvenido, Árbitro. Aquí puedes consultar los encuentros programados para tu jornada.</p>

          <form action="#" method="get" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Filtrar partidos</legend>
              
              <label htmlFor="filtro-competicion">Competición:</label>
              <select id="filtro-competicion" name="competicion">
                <option value="todas">Todas las competiciones</option>
                <option value="apertura-2026">Torneo Apertura 2026</option>
                <option value="sub-18">Campeonato Formativo Sub-18</option>
              </select>

              <label htmlFor="filtro-estado">Estado:</label>
              <select id="filtro-estado" name="estado">
                <option value="todos">Todos los estados</option>
                <option value="programado">Programado</option>
                <option value="en-curso">En curso</option>
                <option value="finalizado">Finalizado</option>
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
                <th scope="col">Rol Asignado</th>
                <th scope="col">Estado</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#101</td>
                <td>Torneo Apertura 2026</td>
                <td>10/10/2026</td>
                <td>Estadio Monumental</td>
                <td><strong>Pokemon FC</strong> vs. <strong>Digimon FC</strong></td>
                <td>Árbitro Central</td>
                <td>Programado</td>
                <td>
                  <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('detalle'); }}>Ver detalle</a>
                </td>
              </tr>
              <tr>
                <td>#90</td>
                <td>Torneo Apertura 2026</td>
                <td>14/10/2026</td>
                <td>Estadio Nacional</td>
                <td><strong>Universidad Diego Portales</strong> vs. <strong>Universidad Andres Bello</strong></td>
                <td>Árbitro Central</td>
                <td>Programado</td>
                <td>
                  <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('detalle'); }}>Ver detalle</a>
                </td>
              </tr>
              <tr>
                <td>#098</td>
                <td>Torneo Apertura 2026</td>
                <td>02/10/2026</td>
                <td>La Bombonera</td>
                <td><strong>Chile</strong> 2 - 1 <strong>Argentina</strong></td>
                <td>Árbitro Central</td>
                <td>Terminado</td>
                <td>
                  <a href="#" onClick={(e) => { e.preventDefault(); cambiarVista('acta'); }}>Ver acta digital</a>
                </td>
              </tr>
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