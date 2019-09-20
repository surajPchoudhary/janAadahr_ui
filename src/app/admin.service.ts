import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string='http://localhost:3000'
  constructor(public http:HttpClient) { }

  getRegisteredCitizen(){
    return this.http.get(`${this.url}/registeredCitizen`)
  }

  getTotalTransaction(){
    return this.http.post(`${this.url}/getTotalTransCount`,{})
  }

  getGender(){
    return this.http.post(`${this.url}/totalGenderCount`,{})
  }

  }