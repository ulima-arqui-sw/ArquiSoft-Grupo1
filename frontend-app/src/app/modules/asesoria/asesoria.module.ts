import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JitsiComponent } from './components/jitsi/jitsi.component';
import { MyMeetingsComponent } from './components/my-meetings/my-meetings.component';
import { ReunionInfoComponent } from './components/reunion-info/reunion-info.component';



@NgModule({
  declarations: [
    JitsiComponent,
    MyMeetingsComponent,
    ReunionInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    JitsiComponent,
    MyMeetingsComponent
  ]
})
export class AsesoriaModule { }
