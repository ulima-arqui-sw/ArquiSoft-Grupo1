// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/sesion/components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Puedes agregar más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
