import { useState } from "react";
import { roles } from "../data/datos";

export default function Login({ onIngresar }) {
  const [email, setEmail] = useState("arbitro@actagol.cl");
  const [password, setPassword] = useState("123456");
  const [rol, setRol] = useState("arbitro");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el navegador recargue la página
    onIngresar({ email, rol }); // Envía el objeto de usuario a App.jsx
  };

  return (
    <main className="login-container">
      <section>
        <h1>ActaGol</h1>
        <p>Plataforma digital para el registro arbitral</p>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Ingreso a la plataforma</legend>
            
            <div>
              <label htmlFor="email">Correo electrónico:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="arbitro@actagol.cl" 
              />
            </div>

            <div>
              <label htmlFor="password">Contraseña:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="rol">Rol de acceso (demostración):</label>
              <select 
                id="rol" 
                name="rol"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                {roles.map((rolOpcion) => (
                  <option key={rolOpcion.id} value={rolOpcion.id}>
                    {rolOpcion.nombre}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">Entrar</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
}