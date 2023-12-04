import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchivosService } from '../../../../services/archivos/archivos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router, private archivosService: ArchivosService, private cdr: ChangeDetectorRef) {
    this.idUsuario = Number(localStorage.getItem('id'))
  }

  hasFile: boolean = false;
  selectedFile: File | null = null;;
  idUsuario: number = 0;
  keys: string[] = [];

  ngOnInit(): void {

    this.archivosService.getKeys().subscribe((keys: string[]) => {
      this.keys = keys;
      this.cdr.detectChanges();
      console.log('Bucket Keys:', this.keys);
    }
    )
  }

  fileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.hasFile = true;
    } else {
      this.hasFile = false;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const fileData = new FormData();
      let fileTitle = new String;

      fileTitle = this.idUsuario.toString() + "_" + this.selectedFile.name + "_" + new Date().getTime() + "." + this.selectedFile.name.split(".")[1];

      fileData.append('file', this.selectedFile);
      fileData.append('fileTitle', fileTitle.toString());

      this.archivosService.uploadFile(fileData).subscribe(
        (response) => {
          console.log('Archivo subido sin problemas');
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error al subir archivo:', error);
        }
      );
    }
  }

  downloadFile(key:string) {
    this.archivosService.downloadFile(key).subscribe(
      (response: Blob) => {
        console.log(response)
        const blobUrl = URL.createObjectURL(response);
        const anchor = document.createElement('a');

        anchor.href = blobUrl;
        anchor.download = key.split("_")[1].split("_")[0];
        anchor.click();
        URL.revokeObjectURL(blobUrl);
      },
      (error) => {
        console.error('Error al descargar archivo:', error);
      }
    )
  }

}

