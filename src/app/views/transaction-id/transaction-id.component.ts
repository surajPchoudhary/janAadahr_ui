import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Event,Router,NavigationStart,NavigationEnd,  } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-transaction-id',
  templateUrl: './transaction-id.component.html',
  styleUrls: ['./transaction-id.component.scss']
})
export class TransactionIdComponent implements OnInit {
  public gh1: any
  public obj = {};

  public gh: any
  public mem_id: any
  public familyid: any
  public familyInfo: any
  name: any
  HOFname: any
  t1: any
  showLoadingIndicator=true

  constructor(public ngxuiservice:NgxUiLoaderService, public router:Router,public route: ActivatedRoute, public service: UserService) { }

  ngOnInit() {
    this.ngxuiservice.start()

    this.familyid = 'YIUSSSS';

    // this.router.events.subscribe((routerEvent:Event)=>{
    //   $('#showLoadingIndicator').show(); })

  
    this.mem_id = this.route.snapshot.queryParamMap.get('mem_id')
    this.name = this.route.snapshot.queryParamMap.get('name')
    
   
    this.service.getFamilyInfo(this.familyid).subscribe(data => {
      this.t1 = data
      var len = this.t1.length

      for (var i = 0; i < len; i++) {
        console.log(this.t1[i].data.MEM_ID, "============>")

        if (this.t1[i].data.MEM_ID == '0') {
          console.log("Hof Name", this.t1[i].data.Name)
          this.obj['Hof'] = (this.t1[i].data.Name);
  
        }

        if (this.t1[i].data.MEM_ID == this.mem_id) {



          console.log(this.t1[i], "***********")
          this.familyInfo = this.t1[i]
          this.gh1 = this.familyInfo.data
          console.log("-----------", this.gh1)

          console.log("particular member", this.familyInfo.data)
          this.obj['data'] = (this.familyInfo.data);
              // $('#showLoadingIndicator').hide();
              this.ngxuiservice.stop()
          return this.obj
        }
              
      }
    
    })


  }

  view(memberid) {

    console.log("memberid", memberid)
    var len = this.t1.length
    for (var i = 0; i < len; i++) {
      if (this.t1[i].data.MEM_ID == '0') {
        console.log("Hof Name", this.t1[i].data.Name)
        this.obj['Hof'] = (this.t1[i].data.Name);

      }
      console.log(this.t1[i].data.MEM_ID, "============>")
      if (this.t1[i].data.MEM_ID == memberid) {
        console.log(this.t1[i], "***********")
        this.familyInfo = this.t1[i]
        this.gh = this.familyInfo.data
        //console.log("familyIngo",this.familyInfo.data)
        this.obj['data'] = (this.familyInfo.data);
        console.log("HOF", this.obj)
        return this.obj
      }
    }

  }

}








