import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router, public dialog: MatDialog) {
  }

  hasFile: boolean = false;
  
  fileChanged(event: any) {
    this.hasFile = event.target.files.length > 0;
  }

  uploadFile() {
    
  }

}

