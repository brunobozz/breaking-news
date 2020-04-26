import { Component, OnInit } from '@angular/core';
import { NewsapiService } from "../../modules/newsapi/services/newsapi.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public apiCountry: string;
  public countries: string[] = ['AR', 'BR', 'US', 'CH', 'IT', 'RU', 'JP', 'CN', 'FR'];
  // public countries: string[] = this.newsapiService.apiCountries;

  constructor(private newsapiService: NewsapiService, ) { }

  ngOnInit(): void {
    this.apiCountry = this.newsapiService.apiCountry
  }

  public changeCountry(country: string) {
    this.newsapiService.changeCountry(country);
    this.apiCountry = country;
  }

}
