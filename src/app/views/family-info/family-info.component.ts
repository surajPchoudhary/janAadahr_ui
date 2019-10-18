import { Component, OnInit, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { UserService } from 'src/app/user.service';
import { Event, Router, NavigationStart, NavigationEnd, } from '@angular/router';
@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss']
})
export class FamilyInfoComponent implements OnInit {
  // public data:Array<any>

  public gh: any
  @Input() name: any
  public familyInfo: any
  public obj = {}
  public obj1:any
  public unqKey: any
  public familyid: any;
  public fi: any = [];
  public fi1: [];
  showLoadingIndicator = true

  constructor(public ngxuiservice:NgxUiLoaderService,public router: Router, public service: UserService) { }

  ngOnInit() {
    this.familyid = 'YIUSSSS';

    // this.router.events.subscribe((routerEvent: Event) => {
    //   $('#showLoadingIndicator').show();
     
    // })

    this.ngxuiservice.start()


    console.log("familyid", this.familyid)
    this.service.getFamilyInfo(this.familyid).subscribe(data => {

      this.fi = data
      console.log("sf", this.fi)
      var len = this.fi.length
      for (var i = 0; i < len; i++) {

        if (this.fi[i].data.MEM_ID == '0') {
          console.log("Hof Name", this.fi[i].data.Name)
          this.obj['Hof'] = (this.fi[i].data.Name);
          this.obj['data'] = (this.fi[i].data.Name);
        }


      // $('#showLoadingIndicator').hide();
      
      
    }
    this.ngxuiservice.stop()
    })
  }

  view(memberid) {

    console.log("memberid", memberid)
    var len = this.fi.length
    for (var i = 0; i < len; i++) {

      if (this.fi[i].data.MEM_ID == '0') {
        console.log("Hof Name", this.fi[i].data.Name)
        this.obj['Hof'] = (this.fi[i].data.Name);

      }


    
      console.log(this.fi[i].data.MEM_ID, "============>")
      if (this.fi[i].data.MEM_ID == memberid) {
        console.log(this.fi[i], "***********")
        this.familyInfo = this.fi[i]
        this.gh = this.familyInfo.data
        console.log("-----------", this.gh)

        this.obj['data'] = (this.familyInfo.data);
   this.obj1=this.obj['data'] ; 
        console.log("particular member", this.familyInfo.data)
        //console.log("familyIngo",this.familyInfo.data)
        // this.obj['data'] = (this.familyInfo.data);
        console.log("HOF", this.obj)
       
        return this.obj

      }

    }

  }
}






