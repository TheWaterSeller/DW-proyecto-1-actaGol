import { useState } from "react";
import Login from "./views/Login";
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

  return (
    <main className="pantalla-centrada">
      <section className="tarjeta">
        <h1>Bienvenido a ActaGol</h1>
        <p>
          Ingresaste como <strong>{usuario.email}</strong> con el rol{" "}
          <strong>{nombreRol(usuario.rol)}</strong>.
        </p>
        <button type="button" className="boton" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </section>
    </main>
  );
}

export default App;
