import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  url:string='http://localhost:3000'
  constructor(public http:HttpClient) { }

 
  readUserDetails(familyid,mem_id){
    return this.http.post(`${this.url}/readUserDetails`,{familyid:familyid,mem_id:mem_id})
  }

  getFamilyInfo(familyid){
    return this.http.post(`${this.url}/getFamilyInfo`,{familyid:familyid})
  }

  // gettransactions(mem_id,name){
  //   return this.http.post(`${this.url}/getFamilyInfo`,{mem_id:mem_id,name:name})
  // }

  // getfamily(mem_id){
  //   return this.http.post(`${this.url}/getFamilyInfo`,{mem_id:mem_id})
  // }



   

}
  