import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: Socket;
  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    
  ) { }

  connect(url: string): void {
    this.socket = io(url);

    // Ejemplo: Escuchar mensajes del servidor
    this.socket.on('mensaje_desde_servidor', (data: any) => {
      console.log('Mensaje recibido desde el servidor:', data);
    });
  }

  enviarMensaje(mensaje: string) {
    if (this.socket) {
      this.socket.emit('mensaje_desde_cliente', mensaje);
    } else {
      console.error('El socket no está conectado.');
    }
  }

  onMensaje(): Observable<any> {
    return new Observable<any>(observer => {
      if (this.socket) {
        this.socket.on('mensaje_desde_servidor', (data: any) => observer.next(data));
      } else {
        console.error('El socket no está conectado.');
      }
    });
  }

  // Ejemplo: Obtener conversación
  getConversation(idAprendiz: number, idMentor: number, rol: string){
    console.log("ROL EN EL SERVICE", rol);
    console.log("ID APRENDIZ EN EL SERVICE", idAprendiz);
    console.log("ID MENTOR EN EL SERVICE", idMentor);
    const apiUrl = this.apiUrl + '/chat/obtener-mensajes/' + rol ;
    if(rol == 'aprendiz'){
      return this.http.post(apiUrl, {idAprendiz, idMentor});
    }
    else{
      return this.http.post(apiUrl, {idMentor, idAprendiz});
    }
  }
}
