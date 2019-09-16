import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizenhistory',
  templateUrl: './citizenhistory.component.html',
  styleUrls: ['./citizenhistory.component.scss']
})
export class CitizenhistoryComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

 open(){
   this.router.navigate(['transaction-id'])
 }

}
