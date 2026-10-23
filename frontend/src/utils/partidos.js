import { roles } from "../data/datos";

export function nombreRol(rolId) {
  const rolEncontrado = roles.find((rol) => rol.id === rolId);
  if (rolEncontrado) {
    return rolEncontrado.nombre;
  }
  return "";
}
