import { Component, OnInit } from '@angular/core';
import { NewsapiService } from "../../modules/newsapi/services/newsapi.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public apiCountry: string = this.newsapiService.apiCountry;
  public apiCategory: string = this.newsapiService.apiCategory;
  public categories: string[] = this.newsapiService.apiCategories;
  public countries: string[] = ['br', 'us', 'ch', 'it', 'ru', 'jp', 'ar'];
  // public countries: string[] = this.newsapiService.apiCountries;
  public posts: any[] = [];

  constructor(
    private newsapiService: NewsapiService,
  ) { }

  ngOnInit() {
    this.loadNews('br', '');
  }

  public loadNews(country: string, category: string) {
    this.newsapiService.getNews(country, category).subscribe((response: any) => {
      this.posts = response.articles;
    });
  }

  public changeCategory(category: string) {
    this.apiCategory = category;
    this.loadNews(null, category);
  }

  public changeCountry(country: string) {
    this.apiCountry = country;
    this.loadNews(country, null);
  }


}