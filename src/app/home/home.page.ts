import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  endlessCoronaArray: any[];
  results: Observable<any>;

  confirmed: any;
  deaths: any;
  recovered: any;
  newCases: any;
  population: any;

  constructor(private service: HomeService) {

   this.results = this.service.getData('nigeria');
   this.results.subscribe(resp => {
    //console.log('COVID19 Data: ', resp);
    this.endlessCoronaArray = resp;
   });
  }


  flagClick(countryName: String){

    this.results = this.service.getData(countryName);
    this.results.subscribe(resp => {
     //console.log('COVID19 Data: ', resp);
     this.endlessCoronaArray = resp;
    });
  }

}
