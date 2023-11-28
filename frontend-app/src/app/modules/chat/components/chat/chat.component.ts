import { Component } from '@angular/core';
import { Conversation } from '../../../../interfaces/Conversation';
import { Usuario } from '../../../../interfaces/Usuario';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  conversations : Conversation[] = [];
  currentConversation: Conversation = {} as Conversation;
  user: Usuario = {} as Usuario;

  constructor() { 
    //llamar al backend para obtener las conversaciones y asignar a la variable conversations
  }

}
