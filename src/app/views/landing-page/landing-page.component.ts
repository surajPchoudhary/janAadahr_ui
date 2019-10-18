import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  
  constructor(public ngxuiservice:NgxUiLoaderService,private modalService: NgbModal,public router:Router ) { }


  ngOnInit() {

  }
  
  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.name = 'World';
  // }



  open(){
    this.ngxuiservice.start()   
      this.router.navigate(['/home'],

     
        // { queryParams: { "_id": this._id, userName: this.userName } })
    

      )
      this.ngxuiservice.stop()   
    }

   
}





@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'./ngbd-model.html',
  
  
})
export class NgbdModalContent {
 // @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


