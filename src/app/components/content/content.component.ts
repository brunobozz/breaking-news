import { GsImagesApiService } from './../../modules/googlesearch/services/gs-images-api.service';
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
  public posts: any[] = [];
  public postsImages: string[] = [];

  constructor(
    private newsapiService: NewsapiService,
    private gsImagesApiService: GsImagesApiService
  ) { }

  ngOnInit() {
    this.loadNews('BR', '');
    this.newsapiService.countryChange.subscribe((country: string) => {
      this.loadNews(country, '')
      this.apiCountry = country
    });

  }

  public loadNews(country: string, category: string) {
    this.newsapiService.getNews(country, category).subscribe((response: any) => {
      this.posts = response.articles;
      console.log(this.posts)
      let i = 0
      this.posts.forEach(async element => {
        this.loadImages(element.title, i)
        i++
      })
      console.log(this.postsImages)
    });
  }

  public loadImages(query: string, item) {
    this.gsImagesApiService.getImage(query).subscribe((res: any) => {
      this.posts[item].urlToImage = res.items[0].link
      // console.log(res.items[0].link)
    })
  }

  public changeCategory(category: string) {
    this.apiCategory = category;
    this.loadNews(null, category);
  }

  public term(term: string) {
    if (term === '') {
      alert('Please write something.')
    } else {
      console.log(term)
    }
  }

}