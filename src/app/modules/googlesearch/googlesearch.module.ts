import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//SERVICES
import { GsImagesApiService } from './services/gs-images-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GsImagesApiService
  ]
})
export class GooglesearchModule { }