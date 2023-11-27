// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/sesion/components/login/login.component';
import { JitsiComponent } from './modules/asesoria/components/jitsi/jitsi.component';
import { MyMeetingsComponent } from './modules/asesoria/components/my-meetings/my-meetings.component';
import { FeedComponent } from './modules/inicio/components/feed/feed.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'unirse/:idMeeting', component: JitsiComponent },
  { path: 'mis-reuniones', component: MyMeetingsComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'chat/:idUsuario', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
