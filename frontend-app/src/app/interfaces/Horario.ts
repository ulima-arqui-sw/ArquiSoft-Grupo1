import { Usuario } from "./Usuario";

export interface Horario {
  "id_mentor": number,
  "dia_semana": string,
  "hora_inicio": Date,
  "hora_fin": Date
}