import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent {
  horariosDisponibles: string[] = [];

  buscarMentor() {
    fetch('http://localhost:3000/horarios')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        this.horariosDisponibles = data;
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  }

  solicitarCita() {
    console.log('Cita solicitada');
  }
}
