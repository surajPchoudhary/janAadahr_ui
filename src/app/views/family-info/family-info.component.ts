import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss']
})
export class FamilyInfoComponent implements OnInit {
 public familyid:any;
 public fi:any;
 public fi1:any;
  constructor(public router:Router,public service:UserService) { }

  ngOnInit() {
    this.familyid='YIUSSSS'
   console.log("familyid",this.familyid)
      this.service.getFamilyInfo(this.familyid).subscribe(data=>{
        
        this.fi=data
this.fi1=this.fi
        console.log("sf",this.fi1)

      })
    
    

    }

}
