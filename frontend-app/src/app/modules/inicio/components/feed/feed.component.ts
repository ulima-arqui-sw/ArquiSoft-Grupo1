import { Component } from '@angular/core';
import { Publicacion } from '../../../../interfaces/Publicacion';
import { PublicacionService } from '../../../../services/publicacion/publicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  listaPublicaciones: Publicacion[] = [];
  idUsuario = 0
  tipoContenido = ''

  constructor(private publicacionService: PublicacionService, private router: Router) {
    this.getFeed()
  }
  

  getFeed() {
    const idUsuario = localStorage.getItem('id');
    if (idUsuario !== null) {
      this.idUsuario = +idUsuario;
      try {
        this.publicacionService.getFeed(+idUsuario).subscribe((data: Publicacion[]) => {
          this.listaPublicaciones = data;
          if (this.listaPublicaciones[0].tipo === 'publicacionAprendiz') this.tipoContenido = 'aprendices buscando ayuda';
          else if (this.listaPublicaciones[0].tipo === 'publicacionMentor') this.tipoContenido = 'mentores ofreciendo ayuda';
        })
      } catch (error) {
        console.error('Error en getReuniones:', error);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  enviarMensaje(idUsuario: number) {
    this.router.navigate(['/chat', idUsuario]);
  }
}
