import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: Socket;

  constructor() { }

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
}
