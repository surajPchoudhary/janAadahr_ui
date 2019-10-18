import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Event,Router,NavigationStart,NavigationEnd } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
    


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  d1:any = {}
  
  public mem_id:any
  public gh: any
  @Input() name: any
  // public familyInfo: any
  public obj: {}
  public unqKey: any
  public familyid: any;
  public fi: any = [];
  public fi1: [];
  // familyForm: FormGroup;
  submitted = false;
  showLoadingIndicator = true
  setData = {}

  constructor(public ngxuiservice:NgxUiLoaderService,public router: Router, public service: UserService) { }


  ngOnInit() {
    
   
   

    this.familyid='YIUSSSS'
    this.mem_id='0'
    console.log("familyid",this.familyid)
    console.log("mem_id",this.mem_id)
    this.ngxuiservice.start()    
    this.service.readUserDetails(this.familyid,this.mem_id).subscribe(data=>{
      this.d1=data
      console.log('read',this.d1.data.data);
      this.setData = this.d1.data.data;
      this.ngxuiservice.stop()
    })
  
    

  }
    

// familyInfo(){
  
//   this.familyid='YIUSSSS'
//   this.mem_id = '0';  
  
  
// }
}
