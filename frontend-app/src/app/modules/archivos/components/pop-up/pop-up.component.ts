import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuComponent,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
