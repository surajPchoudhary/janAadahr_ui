import { Component,} from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Event,Router,NavigationStart,NavigationEnd,  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'janadar';
  public str : any ;
  public hide_menu:any;
  public hide_bar:any;
  public showLoadingIndicator=true;
  constructor(public ngxuiservice:NgxUiLoaderService, public router:Router,public route: ActivatedRoute, public service: UserService) { }

  ngOnInit() {

    // this.ngxuiservice.start()
   
   
    this.str = window.location.href;
    console.log("url is :",this.str);
    // if( this.str == "http://localhost:4200/"){
  if( this.str == "http://10.68.252.222:9000/"){
    this.hide_menu = false;
    console.log("hide_menu :",this.hide_menu);
    this.hide_bar = false;
    }else{
      this.hide_menu = true;
      this.hide_bar = true;
      console.log("hide_menu :",this.hide_menu);
    }
   
    // this.ngxuiservice.stop()
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
