import { useState } from "react";
import { roles } from "../data/datos";

const formularioInicial = { email: "", password: "", rol: "arbitro" };

function validarLogin(form) {
  const errores = {};
  const email = form.email.trim();

  if (email === "") {
    errores.email = "Ingresa tu correo electrónico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.email = "Escribe un correo válido, por ejemplo arbitro@actagol.cl.";
  }

  if (form.password === "") {
    errores.password = "Ingresa tu contraseña.";
  } else if (form.password.length < 6) {
    errores.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errores;
}

function Login({ onIngresar }) {
  const [form, setForm] = useState(formularioInicial);
  const [errores, setErrores] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((anterior) => ({ ...anterior, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nuevosErrores = validarLogin(form);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    onIngresar({ email: form.email.trim(), rol: form.rol });
  }

  return (
    <main className="pantalla-centrada">
      <section className="tarjeta tarjeta-login">
        <h1 className="logo">ActaGol</h1>
        <p className="subtitulo">Plataforma digital para el registro arbitral</p>

        <form className="formulario" onSubmit={handleSubmit} noValidate>
          <div className="campo">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="arbitro@actagol.cl"
              autoComplete="username"
              value={form.email}
              onChange={handleChange}
              aria-invalid={errores.email ? "true" : "false"}
              aria-describedby={errores.email ? "email-error" : undefined}
            />
            {errores.email && (
              <p id="email-error" className="mensaje-error">
                {errores.email}
              </p>
            )}
          </div>

          <div className="campo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              aria-invalid={errores.password ? "true" : "false"}
              aria-describedby={errores.password ? "password-error" : undefined}
            />
            {errores.password && (
              <p id="password-error" className="mensaje-error">
                {errores.password}
              </p>
            )}
          </div>

          <div className="campo">
            <label htmlFor="rol">Rol de acceso (demostración)</label>
            <select id="rol" name="rol" value={form.rol} onChange={handleChange}>
              {roles.map((rol) => (
                <option key={rol.id} value={rol.id}>
                  {rol.nombre}
                </option>
              ))}
            </select>
          </div>

          <p className="texto-ayuda">
            Para la demostración puedes usar cualquier correo válido y una contraseña de al menos
            6 caracteres.
          </p>

          <button type="submit" className="boton boton-bloque">
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
