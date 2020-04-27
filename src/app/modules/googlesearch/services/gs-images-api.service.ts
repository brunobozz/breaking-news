import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GsImagesApiService {

  private query: string;
  private API_KEY: string = environment.GCS_API_KEY;
  private API_URL: string = environment.GCS_API_URL;
  private GCS_ID: string = environment.GCS_ID;
  private URL: string = this.API_URL + '?key=' + this.API_KEY + '&cx=' + this.GCS_ID + '&searchType=image' + '&q=';

  constructor(private http: HttpClient) { }

  getImage(query: string): Observable<any> {
    return this.http.get(this.URL + query);
  }

}
