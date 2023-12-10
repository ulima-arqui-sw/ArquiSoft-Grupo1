// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/sesion/components/login/login.component';
import { JitsiComponent } from './modules/asesoria/components/jitsi/jitsi.component';
import { MyMeetingsComponent } from './modules/asesoria/components/my-meetings/my-meetings.component';
import { FeedComponent } from './modules/inicio/components/feed/feed.component';
import { ChatComponent } from './modules/chat/components/chat/chat.component';
import { MenuComponent } from './modules/archivos/components/menu/menu.component';
import { CitasComponent } from './modules/citas/components/citas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'unirse/:idMeeting', component: JitsiComponent },
  { path: 'mis-reuniones', component: MyMeetingsComponent },
  { path: 'archivos', component: MenuComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'chat/:idUsuario', component: ChatComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'reservarCita', component: CitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
