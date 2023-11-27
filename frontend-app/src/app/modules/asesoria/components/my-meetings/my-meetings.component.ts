import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reunion } from '../../../../interfaces/Reunion';
import { ReunionService } from '../../../../services/reunion.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-meetings',
  templateUrl: './my-meetings.component.html',
  styleUrls: ['./my-meetings.component.css']
})
export class MyMeetingsComponent {
  listaReuniones: Reunion[] = [];
  listaInvitaciones: Reunion[] = [];
  formCrearReunion: FormGroup;
  idUsuario = 0
  constructor(private reunionService: ReunionService, private router: Router, private fb: FormBuilder) {
    this.getMeetings()
    this.getInvitaciones()
    this.formCrearReunion = this.fb.group({
      'nombreReunion': ''
    })
    
  }
  async getMeetings() {   
    const idUsuario = localStorage.getItem('id');
    if (idUsuario !== null) {
      this.idUsuario = +idUsuario;
      try {
        this.reunionService.getReuniones(+idUsuario).subscribe((data: Reunion[]) => {
          this.listaReuniones = data;
        })
      } catch (error) {
        console.error('Error en getReuniones:', error);
      }
    }
  }

  async getInvitaciones() {
    const idUsuario = localStorage.getItem('id');
    if (idUsuario !== null) {
      this.idUsuario = +idUsuario;
      try {
        this.reunionService.getInvitaciones(+idUsuario).subscribe((data: Reunion[]) => {
          this.listaInvitaciones = data;
        })
      } catch (error) {
        console.error('Error en getReuniones:', error);
      }
    }
  }

  async crearReunion() {
    const nombre = this.formCrearReunion.get('nombreReunion')?.value;
    try {
      this.reunionService.crearReunion(nombre, this.idUsuario).subscribe( data => {
        this.getMeetings()
      });
    } catch (error) {
      console.error('Error en crearReunion:', error);
    }
  }

  

}
