import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Event,Router,NavigationStart,NavigationEnd,  } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-citizenhistory',
  templateUrl: './citizenhistory.component.html',
  styleUrls: ['./citizenhistory.component.scss']
})
export class CitizenhistoryComponent implements OnInit {

  familyid:any;
  h1:any

  showLoadingIndicator=true

  

  constructor(public ngxuiservice:NgxUiLoaderService, public router:Router, public service:UserService) { }

  ngOnInit() {

    this.familyid='YIUSSSS';
this.ngxuiservice.start()
    console.log("familyid",this.familyid)

    this.service.getFamilyInfo(this.familyid).subscribe(data=>{

      this.h1=data
      console.log("history",this.h1)
      this.ngxuiservice.stop()
    })
    

  }

  

 open(mem_id,name){
  
   this.router.navigate(['transaction-id'],{ queryParams: { mem_id: mem_id ,name:name} })
   
  };


}

