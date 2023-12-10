import { Injectable, EventEmitter } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: Socket;
  private apiUrl = 'http://localhost:3000';

  // EventEmitter para notificar a los componentes cuando se envía un mensaje
  mensajeEnviado: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.socket = io(this.apiUrl);

    // Escuchar eventos desde el servidor
    this.socket.on('nuevo-mensaje', (data: any) => {
      // Notificar a los componentes sobre un nuevo mensaje recibido
      this.mensajeEnviado.emit(data);
    });
  }

  getConversation(idAprendiz: number, idMentor: number) {
    this.socket.emit('join_room', 'nombre_de_la_sala');
    const apiUrl = this.apiUrl + '/chat/obtener-mensajes/';
    return this.http.post(apiUrl, { idAprendiz, idMentor });
  }

  enviarMensaje(remitente: number, destinatario: number, contenido: string) {
    const apiUrl = this.apiUrl + '/chat/guardar-mensaje';
    try {
      this.http.post(apiUrl, { remitente, destinatario, contenido }).subscribe((data: any) => {
        // Emitir evento 'mensaje_sala' al servidor
        this.socket.emit('nuevo-mensaje', data);
        console.log("evento emitido", data);
      });
    } catch (error) {
      console.log("ERROR AL GUARDAR MENSAJE", error);
    }
  }
  
}
