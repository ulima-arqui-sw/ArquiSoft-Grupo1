import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { UrlObtainComponent } from './url-obtain/url-obtain.component';

const routes: Routes = [
  {path: 'shortener', component:UrlShortenerComponent},
  {path: '', redirectTo:'shortener', pathMatch:'full'},
  {path: 'shortener/:key', component:UrlObtainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
