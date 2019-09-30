import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss']
})
export class FamilyInfoComponent implements OnInit {
 familyid:'YIUSSSS'
  constructor(public router:Router, public service:UserService) { }

  ngOnInit() {

this.service.getFamilyInfo(this.familyid).subscribe( data=>{
  console.log(data);
})

   
  }



}
