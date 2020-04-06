import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//SERVICES
import { NewsapiService } from './services/newsapi.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    NewsapiService
  ]
})
export class NewsapiModule { }
