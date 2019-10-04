import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-transaction-id',
  templateUrl: './transaction-id.component.html',
  styleUrls: ['./transaction-id.component.scss']
})
export class TransactionIdComponent implements OnInit {
public gh1:any
public gh:any
public mem_id:any
public familyid:any
public familyInfo:any
name:any
HOFname:any
t1:any
  constructor(public route:ActivatedRoute,public service:UserService) { }

  ngOnInit() {
    this.familyid='YIUSSSS';
this.mem_id=this.route.snapshot.queryParamMap.get('mem_id')
this.name=this.route.snapshot.queryParamMap.get('name')
this.service.getFamilyInfo(this.familyid).subscribe(data=>{
this.t1=data
var len=this.t1.length
    for(var i=0;i<len;i++){
    console.log(this.t1[i].data.MEM_ID,"============>")
    if(this.t1[i].data.MEM_ID==this.mem_id){
      
     
  
    console.log(this.t1[i],"***********")
    this.familyInfo=this.t1[i]
    this.gh1=this.familyInfo.data


     if(this.t1[i].data.HOF==='HOF'){
      this.HOFname=this.gh1.Name
      console.log("HOF name",this.HOFname);}
    
    console.log("particular member",this.familyInfo.data)
    return this.t1[i]
    }
  }

})

  
}
  
  view(memberid){
    console.log("memberid",memberid)
    var len=this.t1.length
    for(var i=0;i<len;i++){
    console.log(this.t1[i].data.MEM_ID,"============>")
    if(this.t1[i].data.MEM_ID==memberid){
    console.log(this.t1[i],"***********")
    this.familyInfo=this.t1[i]
    this.gh=this.familyInfo.data
    console.log("familyIngo",this.familyInfo.data)
    return this.t1[i]
    }
}

  }
}







