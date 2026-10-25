import { nombreRol } from "../utils/partidos";

export default function Header({ usuario, cambiarVista, onCerrarSesion }) {
  return (
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
  );
}
