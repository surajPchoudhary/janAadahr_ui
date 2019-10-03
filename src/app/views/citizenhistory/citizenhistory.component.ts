import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-citizenhistory',
  templateUrl: './citizenhistory.component.html',
  styleUrls: ['./citizenhistory.component.scss']
})
export class CitizenhistoryComponent implements OnInit {

  familyid:any;
  h1:any

  

  constructor(public router:Router, public service:UserService) { }

  ngOnInit() {

    this.familyid='YIUSSSS';
    console.log("familyid",this.familyid)

    this.service.getFamilyInfo(this.familyid).subscribe(data=>{

      this.h1=data
      console.log("history",this.h1)
    })
  }

 open(mem_id,name){
   this.router.navigate(['transaction-id'],{ queryParams: { mem_id: mem_id ,name:name} })
 }

}
