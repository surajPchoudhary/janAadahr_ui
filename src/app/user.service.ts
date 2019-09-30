import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  url:string='http://localhost:3000'
  constructor(public http:HttpClient) { }

 

  getFamilyInfo(familyid){
    return this.http.post(`${this.url}/getFamilyInfo`,{familyid:familyid})
  }

}
