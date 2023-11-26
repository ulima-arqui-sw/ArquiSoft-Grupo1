// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/sesion/components/login/login.component';
import { JitsiComponent } from './modules/asesoria/components/jitsi/jitsi.component';
import { MyMeetingsComponent } from './modules/asesoria/components/my-meetings/my-meetings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'join/:idMeeting', component: JitsiComponent },
  { path: 'my-meetings', component: MyMeetingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
