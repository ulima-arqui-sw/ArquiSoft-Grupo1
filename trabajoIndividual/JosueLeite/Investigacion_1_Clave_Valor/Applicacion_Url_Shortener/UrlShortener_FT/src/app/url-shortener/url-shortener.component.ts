import { Component } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {

  newUrl : String;
  responseUrl : String;
  currentUrl: String;
  sent : Boolean;

  constructor(
    private urlShortener:UrlShortenerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sent = false;
    this.currentUrl = window.location.href;
  }
  
  onSubmit(){
    console.log(this.newUrl);
    this.sendUrl(this.newUrl);
  }

  private sendUrl(url:String){
    this.urlShortener.sendUrl(url).subscribe(data => {
      console.log(data);
      this.sent = true;
      this.responseUrl = data.toString();
    }, e => console.log(e));
  }

}
