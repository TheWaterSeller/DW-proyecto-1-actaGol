import { useState } from "react";
import Login from "./views/Login";
import VistaGeneral from "./views/VistaGeneral";
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
    <VistaGeneral 
      usuario={usuario} 
      onCerrarSesion={cerrarSesion} 
    />
  );
}

export default App;