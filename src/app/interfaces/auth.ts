import { Usuario } from "../model/usuario.model";

export interface Auth {
    token: String,
    usuario: Usuario
  }