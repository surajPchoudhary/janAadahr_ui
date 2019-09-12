import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private modalService: NgbModal, ) { }


  ngOnInit() {}
  
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
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


