import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  d1:any
  familyid:any
  mem_id:any

  // familyForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public service:UserService) { }

  ngOnInit() { 
    this.familyid='YIUSSSS'
    this.mem_id='0'

    console.log("familyid",this.familyid)
    console.log("mem_id",this.mem_id)

    this.service.readUserDetails(this.familyid,this.mem_id).subscribe(data=>{
      this.d1=data
      console.log('read',this.d1.data.data);
    })

  }
    



}
