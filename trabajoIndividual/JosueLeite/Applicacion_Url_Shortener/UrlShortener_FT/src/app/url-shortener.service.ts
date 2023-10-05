import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  private  bkUrl = "http://localhost:8081/";

  constructor(private httpClient : HttpClient) { }

  sendUrl(url:String): Observable<Object> {
    return this.httpClient.post(`${this.bkUrl}`, url, {responseType:'text'});
  }

  getUrl(key:String): Observable<Object> {
    return this.httpClient.get(`${this.bkUrl}${key}`, {responseType:'text'})
  }

}
