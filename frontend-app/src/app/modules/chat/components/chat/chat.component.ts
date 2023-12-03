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

    //Obtener id del mentor por url actual
    this.activatedRoute.params.subscribe(params => {
      this.idReceptor = params['idUsuario'].toString();
      console.log("ID RECEPTOR", this.idReceptor);
      console.log("ID REMITENTE", idUsuario)
    });

    // Obtener datos del usuario
    this.usuarioService.getUsuario(idUsuario).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        console.log("USUARIO", this.usuario);
        this.obtenerConversacion();
      });

      this.usuarioService.getUsuario(this.idReceptor).subscribe((usuario: Usuario) => {
        this.nombreReceptor = `${usuario.nombre} ${usuario.apellido}`;
        console.log("NOMBRE RECEPTOR", this.nombreReceptor);
      });

      // Obtener conversacion
      
  }

  obtenerConversacion() {
    this.webSocketService.getConversation(this.usuario.id, this.idReceptor, this.usuario.tipo_usuario).subscribe((data: any) => {
      console.log("CONVERSACION", data);
      this.conversacionActual = data;
    });
      
  }


  enviarMensaje() {
    if (this.messageText.trim() != "") {
      this.webSocketService.enviarMensaje(this.messageText);
      this.messageText = "";
    }
  }
}
