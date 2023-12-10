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
import { CitasComponent } from './modules/citas/components/citas.component';
import { CitasModule } from './modules/citas/citas.module';
import { SocketIoModule } from 'ngx-socket-io';
import { MenuComponent } from './modules/archivos/components/menu/menu.component'
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

const config = { url: 'http://localhost:3001/',
 options: {
  transports: ['websocket'],
 } };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,  
    ChatComponent,
    CitasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SesionModule,
    AsesoriaModule,
    HttpClientModule,
    InicioModule,
    CitasModule,
    SocketIoModule.forRoot(config),
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
