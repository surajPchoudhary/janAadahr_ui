import { Component, OnInit } from '@angular/core';
import { Event,Router,NavigationStart,NavigationEnd,  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public showLoadingIndicator=true
  constructor(public router:Router) { }

  ngOnInit() {
   
  }

}
