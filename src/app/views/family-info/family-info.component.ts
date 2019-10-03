import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss']
})
export class FamilyInfoComponent implements OnInit {
  // public data:Array<any>
  public x:any
  public gh:any
  @Input() name:any
  public familyInfo:any
  public result:any
  public unqKey:any
 public familyid:any;
 public fi:any=[];
 public fi1:[];
  // unqKey: string;
  constructor(public router:Router,public service:UserService) { }

  ngOnInit() {
    this.familyid='YIUSSSS';
    
    // this.unqKey='this.familyid'+'this.memberid';


   console.log("familyid",this.familyid)
      this.service.getFamilyInfo(this.familyid).subscribe(data=>{
        
        this.fi=data
         console.log("sf",this.fi)
     
        

    
      })
    
    }

    view(memberid){
      console.log("memberid",memberid)
      var len=this.fi.length
      for(var i=0;i<len;i++){
      console.log(this.fi[i].data.MEM_ID,"============>")
      if(this.fi[i].data.MEM_ID==memberid){
      console.log(this.fi[i],"***********")
      this.familyInfo=this.fi[i]
      this.gh=this.familyInfo.data
      console.log("familyIngo",this.familyInfo.data)
      return this.fi[i]
      }
    }
    }
    } 

        //  var DD = data.filter(this.x=>{this.x.data.MEM_ID==='317700'});
          
        //   console.log(DD)

      
        

      

     
      // var result = this.fi1.filter(obj => {
      //   return obj
      
      // })
      // console.log("memberidf2ff2",result)
      // result..MEM_ID ===
 
    


