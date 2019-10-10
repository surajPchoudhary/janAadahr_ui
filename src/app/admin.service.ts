import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string='http://10.68.252.223:3000'
  constructor(public http:HttpClient) { }

 

  getTotalTransaction(){
    return this.http.post(`${this.url}/getTotalCounts`,{})
  }

  getDistrictCount(){
    return this.http.post(`${this.url}/getDistrictCount`,{})
  }
  getblockCount(district){
    return this.http.post(`${this.url}/getBlockCount`,{district:district})
  }


  getGender(){
    return this.http.post(`${this.url}/totalGenderCount`,{})
  }

  }