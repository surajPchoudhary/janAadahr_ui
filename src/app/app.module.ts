import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent, NgbdModalContent } from './views/landing-page/landing-page.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './views/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NgbdModalContent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbActiveModal,
  // NgbModal,
   NgbModule,

  ],
  entryComponents:[NgbdModalContent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
