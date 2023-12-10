import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  login() {
    localStorage.setItem('id', this.loginForm.value.id);
    this.usuarioService.login(parseInt(this.loginForm.value.id));
    this.router.navigate(['/mis-reuniones']);
  }
}
