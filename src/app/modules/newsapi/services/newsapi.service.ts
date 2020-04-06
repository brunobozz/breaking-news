import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  // readonly endpoint = "http://newsapi.org/v2/top-headlines?country=us&apiKey=8f1e637c0b0f47688a6850ff17433a78";
  readonly endpoint = "http://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=8f1e637c0b0f47688a6850ff17433a78";
  public posts: any = [];

  constructor(private http: HttpClient) {}

  public dynamicRequest(url: string): Observable<any> {
    return this.http.get(url);
  }

  public loadPosts() {
    this.dynamicRequest(this.endpoint).subscribe((response: any) => {
      let i = 0;
      response.articles.forEach(element => {
        this.posts.push(response.articles[i]);
        i++;
      });
    });
  }

}