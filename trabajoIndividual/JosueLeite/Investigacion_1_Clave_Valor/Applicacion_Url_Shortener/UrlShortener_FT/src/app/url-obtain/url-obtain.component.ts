import { Component } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-obtain',
  templateUrl: './url-obtain.component.html',
  styleUrls: ['./url-obtain.component.css']
})
export class UrlObtainComponent {

  key:String;

  constructor(
    private urlShortener:UrlShortenerService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.key = this.route.snapshot.params['key'];
    this.urlShortener.getUrl(this.key).subscribe(data => {
      console.log(data);
      window.location.href = data.toString();
    }, e => console.log(e))
  }

}
