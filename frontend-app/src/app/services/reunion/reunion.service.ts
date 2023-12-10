import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reunion } from '../../interfaces/Reunion';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getReuniones(idUsuario: number) {
    const apiUrl = this.apiUrl + '/reunion/mis-reuniones/' + idUsuario;
    return this.http.get<Reunion[]>(apiUrl);
  }

  getInvitaciones(idUsuario: number) {
    const apiUrl = this.apiUrl + '/reunion/invitaciones/' + idUsuario;
    return this.http.get<Reunion[]>(apiUrl);
  }

  crearReunion(nombreReunion: string, idAnfitrion: number) {
    const apiUrl = this.apiUrl + '/reunion/crear';
    const body = {
      idUser: idAnfitrion,
      nombreReunion
    }
    return this.http.post<any>(apiUrl, body);
  }

  invitar(correo: string, idReunion: number) {
    const apiUrl = this.apiUrl + '/reunion/agregar-invitado';
    const body = {
      idReunion,
      correoInvitado: correo
    }
    return this.http.post<any>(apiUrl, body);
  }
}
