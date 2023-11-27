import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Reunion } from '../../../../interfaces/Reunion';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReunionService } from '../../../../services/reunion/reunion.service';

@Component({
  selector: 'app-reunion-info',
  templateUrl: './reunion-info.component.html',
  styleUrl: './reunion-info.component.css'
})
export class ReunionInfoComponent {
  @Input() reunion!: Reunion
  @Input() misReuniones!: boolean
  formInvitar: FormGroup
  constructor(private router: Router, private fb: FormBuilder, private reunionService: ReunionService) {
    this.formInvitar = this.fb.group({
      'correo': ''
    })
  }
  redirect(nombreReunion: string) {
    this.router.navigate(['/unirse', nombreReunion.replace(/ /g, '-')]);

  }

  async invitar() {
    const correo = this.formInvitar.get('correo')?.value;
    try {
      this.reunionService.invitar(correo, this.reunion.id).subscribe(
        (data) => {
          alert(data.message);
        },
        (error) => {
          alert(error.error.message);
          console.log(error)
        }
      );
    } catch (error) {
      console.error('Error en invitar:', error);
    }
  }

  showModal() {
    const dialogElement = document.getElementById('dialogInvitar') as HTMLDialogElement;
    if (dialogElement && typeof dialogElement.showModal === 'function') {
      dialogElement.showModal();
    }
  }
}
