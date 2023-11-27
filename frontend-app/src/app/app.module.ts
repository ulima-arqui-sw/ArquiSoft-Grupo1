import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionModule } from './modules/sesion/sesion.module';
import { AsesoriaModule } from './modules/asesoria/asesoria.module';
import { HttpClientModule } from '@angular/common/http';
import { InicioModule } from './modules/inicio/inicio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SesionModule,
    AsesoriaModule,
    HttpClientModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
