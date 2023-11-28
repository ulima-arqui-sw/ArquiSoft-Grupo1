import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../../services/citas/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent implements OnInit{
  disponibilidadMentores: any[] = [];


  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.obtenerDisponibilidadMentores();
  }

  obtenerDisponibilidadMentores() {
    this.disponibilidadMentores = this.citasService.obtenerDisponibilidadMentores();
  }

  solicitarReunion(mentorId: number, fecha: Date) {
    this.citasService.solicitarReunion(mentorId, fecha);
    // Puedes agregar lógica adicional después de solicitar la reunión
  }
}
