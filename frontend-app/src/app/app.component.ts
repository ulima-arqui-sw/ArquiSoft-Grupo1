import { Component } from '@angular/core';
import { Salas } from './public/db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-app';
  meetingList: any[] = [];
  constructor() {
    this.getMeetings()
  }
  getMeetings() {
    const idUsuario = localStorage.getItem('id')
    if (idUsuario !== null) this.meetingList = Salas.filter((sala) => sala.idHost + idUsuario);
  }
}
