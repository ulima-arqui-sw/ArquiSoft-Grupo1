import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  uploadFile(fileData: FormData): Observable<any>{
    const apiUrl = this.apiUrl + '/archivo/subir-archivo'

    return this.http.post<any>(this.apiUrl, fileData); 
  }

}
