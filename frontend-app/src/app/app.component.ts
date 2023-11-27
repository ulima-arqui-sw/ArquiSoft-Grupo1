import { Component } from '@angular/core';
import { ReunionService } from './services/reunion.service';
import { Reunion } from './interfaces/Reunion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-app';
  
}
