import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionModule } from './modules/sesion/sesion.module';
import { AsesoriaModule } from './modules/asesoria/asesoria.module';
import { HttpClientModule } from '@angular/common/http';
import { InicioModule } from './modules/inicio/inicio.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ChatComponent } from './modules/chat/components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent
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
