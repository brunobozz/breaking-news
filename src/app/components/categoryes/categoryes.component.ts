import { Component, OnInit } from '@angular/core';
import { NewsapiService } from "../../modules/newsapi/services/newsapi.service";

@Component({
  selector: 'app-categoryes',
  templateUrl: './categoryes.component.html',
  styleUrls: ['./categoryes.component.scss']
})
export class CategoryesComponent implements OnInit {

  public categories: string[] = this.newsapiService.apiCategories;

  constructor(private newsapiService: NewsapiService) { }

  ngOnInit() {
  }

  public sendCategory(category: string) {
    // this.newsapiService.changeCategory(category)
  }

}
