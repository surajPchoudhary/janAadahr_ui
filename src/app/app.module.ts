import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CitizenhistoryComponent } from './views/citizenhistory/citizenhistory.component';
import { TransactionIdComponent } from './views/transaction-id/transaction-id.component';
import { ViewtransactionComponent } from './views/viewtransaction/viewtransaction.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { FamilyInfoComponent } from './views/family-info/family-info.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminDashboardComponent,
    CitizenhistoryComponent,
    TransactionIdComponent,
    ViewtransactionComponent,
    HeaderComponent,
    FooterComponent,
    AdminSideNavComponent,
    FamilyInfoComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
