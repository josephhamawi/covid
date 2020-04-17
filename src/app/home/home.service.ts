import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

url = 'https://kustom.radio-canada.ca/coronavirus/';

  constructor(private http: HttpClient) { }

  getData(country: String): Observable<any> {
   const data =  this.http.get(this.url + country);
    return data;
  }

}
