import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get<any>(`http://localhost:3000/data`);
  }

  getFactory(){
    return this.http.get<any>('http://localhost:3000/factory');
  }

  getApply(){
    return this.http.get<any>('http://localhost:3000/apply');
  }

  addApply(postData:any){
    return this.http.post("http://localhost:3000/apply", postData)
  }

}
