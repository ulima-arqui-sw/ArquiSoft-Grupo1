import { Component , OnInit} from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit {
  idUsuario: number = 0;
  nombreUsuario: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.idUsuario.subscribe(
      (id) => {
        this.idUsuario = id;
        if (this.idUsuario) {
          this.obtenerDatosUsuario();
        }
      }
    );

    // Llamada inicial al obtener el ID del localStorage
    this.idUsuario = Number(localStorage.getItem('id'));
    if (this.idUsuario) {
      this.obtenerDatosUsuario();
    }
  }

  obtenerDatosUsuario() {
    this.usuarioService.getUsuario(this.idUsuario).subscribe(
      (data) => {
        this.nombreUsuario = `${data.nombre} ${data.apellido}`;
        localStorage.setItem('nombre', this.nombreUsuario);
      },
      (error) => {
        // Manejar errores aquí
      }
    );
  }
}
