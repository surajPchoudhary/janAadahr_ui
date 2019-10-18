import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{NgxUiLoaderModule} from 'ngx-ui-loader';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent, NgbdModalContent } from './views/landing-page/landing-page.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './views/test/test.component';

import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';

import { CitizenhistoryComponent } from './views/citizenhistory/citizenhistory.component';
import { TransactionIdComponent } from './views/transaction-id/transaction-id.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlockComponent } from './views/block/block.component';

import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { FamilyInfoComponent } from './views/family-info/family-info.component';
import { HomeComponent } from './views/home/home.component';
import { FamilyDetailsComponent } from './views/family-details/family-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NgbdModalContent,
    TestComponent,
    AdminDashboardComponent,
    CitizenhistoryComponent,
    TransactionIdComponent,
    
    HeaderComponent,
    FooterComponent,
    BlockComponent,
    AdminSideNavComponent,
    FamilyInfoComponent,
    HomeComponent,
    FamilyDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgbModule,
    ReactiveFormsModule,HttpClientModule, NgxUiLoaderModule
  ],
  entryComponents:[NgbdModalContent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
