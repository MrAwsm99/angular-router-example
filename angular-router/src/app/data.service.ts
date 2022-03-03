import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public dt:HttpClient) { }
  
  getdata(){
    return this.dt.get("http://localhost:3000/Employees");
  }
}
