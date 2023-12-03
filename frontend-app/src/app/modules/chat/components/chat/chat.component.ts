import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../../../services/websocket/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  messages: string[] = [];
  messageText: string = "";
  user: string = "";

  constructor( private webSocketService: WebsocketService) {   }

  ngOnInit(): void {
    this.webSocketService.onMensaje().subscribe((data: any) => {
      this.messages.push(data);
    });

    
  }


  enviarMensaje(){

    if(this.messageText.trim() != ""){
      this.webSocketService.enviarMensaje(this.messageText);
      this.messageText = "";
    }
  }
}
