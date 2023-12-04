import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router, public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      height: '40%',
      width: '60%'
    });
  }

}

