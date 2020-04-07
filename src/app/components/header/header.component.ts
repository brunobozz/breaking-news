import { Component, OnInit } from '@angular/core';
import { NewsapiService } from "../../modules/newsapi/services/newsapi.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public countries: string[] = this.newsapiService.apiCountries;

  constructor(private newsapiService: NewsapiService, ) { }

  ngOnInit(): void {
  }

  public changeCountry(country: string) {
    this.newsapiService.changeCountry(country);
  }

}
