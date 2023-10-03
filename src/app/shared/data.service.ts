import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {}

  getData(){
    // const factoryUrl = factoryName ? `factory_area = factoryName` : '';
    // const factoryUrl =
    return this.http.get<any>(`http://localhost:4200/api/api.json`);


  }

  getFactory(){

    return this.http.get<any>('http://localhost:4200/api/factory.json')

  }

}
