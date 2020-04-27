import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { CategoryesComponent } from './components/categoryes/categoryes.component';

import { NewsapiModule } from './modules/newsapi/newsapi.module';
import { GooglesearchModule } from './modules/googlesearch/googlesearch.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    CategoryesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NewsapiModule,
    GooglesearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



