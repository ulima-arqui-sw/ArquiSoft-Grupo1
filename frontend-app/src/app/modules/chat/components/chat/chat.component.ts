import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../../../services/websocket/websocket.service';
import { Usuario } from '../../../../interfaces/Usuario';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  usuario: Usuario = {} as Usuario;
  messageText: string = "";
  conversacionActual: any[] = [];
  

  //datos del receptor
  idReceptor = 0;
  nombreReceptor = "";

  constructor(
    private webSocketService: WebsocketService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idUsuario = parseInt(localStorage.getItem('id') || '0');

    this.webSocketService.mensajeEnviado.subscribe((data: any) => {
      console.log("MENSAJE RECIBIDO", data);
      this.actualizarConversacion();
    });

    //Obtener id del mentor por url actual
    this.activatedRoute.params.subscribe(params => {
      this.idReceptor = params['idUsuario'].toString();
    });

    // Obtener datos del usuario
    this.usuarioService.getUsuario(idUsuario).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        //console.log("USUARIO", this.usuario);
        this.obtenerConversacion();
      });

      this.usuarioService.getUsuario(this.idReceptor).subscribe((usuario: Usuario) => {
        this.nombreReceptor = `${usuario.nombre} ${usuario.apellido}`;
        //console.log("NOMBRE RECEPTOR", this.nombreReceptor);
      });

      // Obtener conversacion
      
  }

  obtenerConversacion() {
    this.webSocketService.getConversation(this.usuario.id, this.idReceptor).subscribe((data: any) => {
      console.log("USUARIO", this.usuario.id);
      console.log("ID RECEPTOR", this.idReceptor);
      console.log("CONVERSACION", data);
      this.conversacionActual = data;
      this.conversacionActual = this.ordenarMensajesPorFecha(this.conversacionActual);
      
    });
      
  }

  enviarMensaje(messageText: string) {
      console.log("MENSAJE", messageText);
      this.webSocketService.enviarMensaje(this.usuario.id, parseInt(this.idReceptor.toString()), messageText);
      this.messageText = "";
      this.actualizarConversacion();
  }

  actualizarConversacion() {
    this.webSocketService.getConversation(this.usuario.id, this.idReceptor).subscribe((data: any) => {
      this.conversacionActual = data;    
      this.conversacionActual = this.ordenarMensajesPorFecha(this.conversacionActual);
    });
  }

   ordenarMensajesPorFecha = (array: any) => {
    return array.sort((a: any, b: any) => {
      const fechaA = new Date(a.Fecha.S);
      const fechaB = new Date(b.Fecha.S);
      return fechaA.getTime() - fechaB.getTime();
    });
  };

  
  esRemitente(id: number) {
    //console.log("ID PARA VALIDAR", id);
    if(id == this.usuario.id){
      //console.log("ES REMITENTE");
      return true;
    }
    else{
      return false;
    }
  }
}
