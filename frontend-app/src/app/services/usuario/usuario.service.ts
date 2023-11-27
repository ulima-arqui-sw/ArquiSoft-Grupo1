import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000';
  private userIdSubject = new BehaviorSubject<number>(0);
  idUsuario = this.userIdSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsuario(idUsuario: number) {
    const apiUrl = this.apiUrl + '/usuario/obtener-datos/' + idUsuario;
    return this.http.get<Usuario>(apiUrl);
  }

  login(idUsuario: number) {
    this.userIdSubject.next(idUsuario);
  }

}
