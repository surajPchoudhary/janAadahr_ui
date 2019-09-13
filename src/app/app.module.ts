import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CitizenhistoryComponent } from './views/citizenhistory/citizenhistory.component';
import { TransactionIdComponent } from './views/transaction-id/transaction-id.component';
import { ViewtransactionComponent } from './views/viewtransaction/viewtransaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminDashboardComponent,
    CitizenhistoryComponent,
    TransactionIdComponent,
    ViewtransactionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
