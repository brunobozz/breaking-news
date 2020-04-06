import { Component, OnInit } from '@angular/core';
import { NewsapiService } from "../../modules/newsapi/services/newsapi.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public posts: any[] = [];

  constructor(
    private newsapiService: NewsapiService,
  ) {}

  ngOnInit() {
    this.newsapiService.loadPosts();
    this.posts = this.newsapiService.posts;
  }

}