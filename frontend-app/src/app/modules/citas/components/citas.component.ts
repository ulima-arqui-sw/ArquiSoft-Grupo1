import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent {
  horariosDisponibles: string[] = [];

  buscarMentor() {
    this.horariosDisponibles = ['Horario 1', 'Horario 2', 'Horario 3'];
  }

  solicitarCita() {
    console.log('Cita solicitada');
  }
}
