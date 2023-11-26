import { Component } from '@angular/core';
import { Salas } from '../../../../public/db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-meetings',
  templateUrl: './my-meetings.component.html',
  styleUrls: ['./my-meetings.component.css']
})
export class MyMeetingsComponent {
  meetingList: any[] = [];
  constructor(private router: Router) {
    this.getMeetings()  
  }
  getMeetings() {
    const idUsuario = localStorage.getItem('id')
    if (idUsuario !== null) this.meetingList = Salas.filter((sala) => sala.idHost + idUsuario);
  }

  redirect(idSala: number) {
    this.router.navigate(['/join', idSala]);
  }

  openDialog() {
    
  }
}
