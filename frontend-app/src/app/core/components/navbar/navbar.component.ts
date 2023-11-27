import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  idUsuario: number = 0;
  nombreUsuario: string = '';
  constructor(private usuarioService: UsuarioService) {
    this.idUsuario = Number(localStorage.getItem('id'));
    this.obtenerDatosUsuario();
  }

  ngOnInit(): void {
    // Suscríbete a cambios en el estado de autenticación
    this.usuarioService.idUsuario.subscribe(
      (id) => {
        this.idUsuario = id;
        this.obtenerDatosUsuario();
      }
    )
  }

  obtenerDatosUsuario() {
    this.usuarioService.getUsuario(this.idUsuario).subscribe(
      (data) => {
        this.nombreUsuario = data.nombre;
        localStorage.setItem('nombre', data.nombre+' '+data.apellido);
      },
      (error) => {
        
      }
    )
  }
}
