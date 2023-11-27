import { Usuario } from "./Usuario";

export interface Publicacion {
  id: number,
  titulo: string,
  tipo: string,
  contenido: string,
  usuario: Usuario
}