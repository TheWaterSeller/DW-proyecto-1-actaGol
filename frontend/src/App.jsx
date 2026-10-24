import { useState } from "react";
import Login from "./views/Login";
import VistaArbitro from "./views/VistaArbitro";       // Componente para Árbitros
import VistaCoordinador from "./views/VistaCoordinador.jsx";   // Componente para Coordinador
import VistaAdmin from "./views/VistaAdmin";           // Componente para Administradores
import { nombreRol } from "./utils/partidos";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(null);

  function iniciarSesion(datosUsuario) {
    setUsuario(datosUsuario);
  }

  function cerrarSesion() {
    setUsuario(null);
  }

  if (usuario === null) {
    return <Login onIngresar={iniciarSesion} />;
  }


  function renderizarPanelSegunRol() {
    switch (usuario.rol) {
      case "arbitro":
        return <VistaArbitro usuario={usuario} onCerrarSesion={cerrarSesion} />;
      case "coordinador":
        return <VistaCoordinador usuario={usuario} onCerrarSesion={cerrarSesion} />;
      case "admin":
        return <VistaAdmin usuario={usuario} onCerrarSesion={cerrarSesion} />;
      default:
        return (
          <section className="tarjeta">
            <h2>Rol no reconocido</h2>
            <p>El rol <strong>{usuario.rol}</strong> no tiene un panel asignado.</p>
            <button type="button" className="boton" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </section>
        );
    }
  }

  return (
    <main className="pantalla-centrada">
      {renderizarPanelSegunRol()}
    </main>
  );
}

export default App;
