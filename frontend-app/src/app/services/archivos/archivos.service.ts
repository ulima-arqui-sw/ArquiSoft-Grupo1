import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  uploadFile(fileData: FormData): Observable<any> {
    const apiUrl = this.apiUrl + '/archivo/subir-archivo'
    return this.http.post<any>(apiUrl, fileData); 
  }

  getKeys(userId: number): Observable<string[]> {
    const apiUrl = this.apiUrl + '/archivo/obtener-keys/' + userId
    return this.http.get<string[]>(apiUrl);
  }

  downloadFile(key: string): Observable<Blob> {
    const apiUrl = this.apiUrl + '/archivo/obtener-archivo/' + key
    return this.http.get(apiUrl, {responseType: 'blob'})
  }
}
