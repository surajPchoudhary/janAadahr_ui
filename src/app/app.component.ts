import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'janadar';
  public str : any ;
  public hide_menu:any;
  constructor(public router:Router ) { }

  ngOnInit() {

    this.str = window.location.href;
    console.log("url is :",this.str);
    if( this.str == "http://localhost:4200/"){

    this.hide_menu = false;
    console.log("hide_menu :",this.hide_menu);

    }else{
      this.hide_menu = true;
    }
  }


  home(){
    this.router.navigate(['home'])
  }

  family(){
    this.router.navigate(['familyInfo'])
  }

  history(){
    this.router.navigate(['citizen-history'])
  }


  
}
