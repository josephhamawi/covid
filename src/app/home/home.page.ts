import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  worldArray: any[];
  nigeriaArray: any[];
  qatarArray: any[];
  qlebArray: any[];

  endlessCoronaArray: any[];
  worldEndlessCoronaArray: any[];
  results: Observable<any>;

  confirmed: any;
  deaths: any;
  recovered: any;
  newCases: any;
  population: any;

  constructor(private service: HomeService) {

   this.results = this.service.getData('world');
   this.results.subscribe(resp => {
    console.log('COVID19 Data: ', resp);
    this.worldArray = resp;
   });
   this.results = this.service.getData('qatar');
   this.results.subscribe(resp => {
    console.log('COVID19 Data: ', resp);
    this.qatarArray = resp;
   });
   this.results = this.service.getData('nigeria');
   this.results.subscribe(resp => {
    console.log('COVID19 Data: ', resp);
    this.nigeriaArray = resp;
    this.endlessCoronaArray = this.nigeriaArray;
   });
   this.results = this.service.getData('lebanon');
   this.results.subscribe(resp => {
    console.log('COVID19 Data: ', resp);
    this.qlebArray = resp;
   });
  }


  flagClick(countryName: String){
    if( countryName == 'world') {

      this.endlessCoronaArray = this.worldArray;
    } else if( countryName =='qatar'){

      this.endlessCoronaArray = this.qatarArray;
    }else if( countryName =='nigeria'){

      this.endlessCoronaArray = this.nigeriaArray;
    }else if( countryName =='lebanon'){
      this.endlessCoronaArray = this.qlebArray;

    }
    console.log(this.endlessCoronaArray);
    
  }
  // flagClick(countryName: String){
  //   if( countryName == 'world') {
  //     this.endlessCoronaArray = this.worldArray;
  //     this.endlessCoronaArray.find(x => x.key = countryName);
  //   } else if( countryName =='qatar'){
  //     this.endlessCoronaArray = this.qatarArray;
  //     this.endlessCoronaArray.find(x =>x.key=countryName);
  //   }else if( countryName =='nigeria'){
  //     this.endlessCoronaArray = this.nigeriaArray;
  //     this.endlessCoronaArray.find(x =>x.key=countryName);
  //   }else if( countryName =='lebanon'){
  //     this.endlessCoronaArray = this.qlebArray;
  //     this.endlessCoronaArray.find(x =>x.key=countryName);
  //   }
  //   console.log(this.endlessCoronaArray);
    
  // }

  // flagClick(countryName: String){

  //   this.results = this.service.getData(countryName);
  //   this.results.subscribe(resp => {
  //    //console.log('COVID19 Data: ', resp);
  //    this.endlessCoronaArray = resp;
  //   });
  // }

}
