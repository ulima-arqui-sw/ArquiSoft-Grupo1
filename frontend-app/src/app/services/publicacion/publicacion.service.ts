import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../../interfaces/Publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getFeed(idUsuario: number) {
    const apiUrl = this.apiUrl + '/publicacion/feed/' + idUsuario;
    return this.http.get<Publicacion[]>(apiUrl);
  }

  enviarCorreo(idPublicacion: number, idUsuario: number) {
    const apiUrl = this.apiUrl + '/enviar-correo'
    const body = {
      idPublicacion,
      idUsuario
    }
    return this.http.post<any>(apiUrl, body);
  }
}
