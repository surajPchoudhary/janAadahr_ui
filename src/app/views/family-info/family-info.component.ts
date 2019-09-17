import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss']
})
export class FamilyInfoComponent implements OnInit {
 
  constructor(public router:Router) { }

  ngOnInit() {
   
  }


 open(){
  this.router.navigate(['family-details'])
}

}
