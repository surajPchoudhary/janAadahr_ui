import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string='http://10.68.198.77:3000'
  constructor(public http:HttpClient) { }

  getRegisteredCitizen(){
    return this.http.post(`${this.url}/getBlockCount`,{})
    
    }

  }