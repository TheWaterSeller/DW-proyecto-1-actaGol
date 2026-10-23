import {roles} from "../data/datos";

export function nombreRol(rolId) {
  return roles.find((rol) => rol.id === rolId)?.nombre ?? "";
}

