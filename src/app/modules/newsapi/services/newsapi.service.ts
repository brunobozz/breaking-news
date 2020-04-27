import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  countryChange: EventEmitter<any> = new EventEmitter();
  readonly apiUrl: string = environment.NEWS_API_URL;
  private apiKey: string = environment.NEWS_API_KEY;
  public apiSource: string = "top-headlines"
  public apiCountry: string = "BR"
  public apiCategory: string = "general"
  public apiCategories: string[] = ["entertainment", "sports", "business", "health", "science", "technology"];
  public apiCountries: string[] = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']

  constructor(private http: HttpClient) { }

  public getNews(country: string, category: string): Observable<any> {
    if (country) { this.apiCountry = country }
    if (category) { this.apiCategory = category }
    return this.http.get(this.apiUrl + this.apiSource + "?" + "country=" + this.apiCountry + "&category=" + this.apiCategory + '&apiKey=' + this.apiKey);
  }

  public changeCountry(country: string) {
    this.countryChange.emit(country)
    this.apiCountry = country
  }

}