import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-transaction-id',
  templateUrl: './transaction-id.component.html',
  styleUrls: ['./transaction-id.component.scss']
})
export class TransactionIdComponent implements OnInit {
public mem_id:any
public familyid:any
name:any
t1:any
  constructor(public route:ActivatedRoute,public service:UserService) { }

  ngOnInit() {
    this.familyid='YIUSSSS';
this.mem_id=this.route.snapshot.queryParamMap.get('mem_id')
this.name=this.route.snapshot.queryParamMap.get('name')
this.service.getFamilyInfo(this.familyid).subscribe(data=>{
this.t1=data

console.log("transaction",this.t1)
})

  }

}
