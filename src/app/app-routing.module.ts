import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { CitizenhistoryComponent } from './views/citizenhistory/citizenhistory.component';
import { TransactionIdComponent } from './views/transaction-id/transaction-id.component';
import { ViewtransactionComponent } from './views/viewtransaction/viewtransaction.component';

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'admin_dashboard', component:AdminDashboardComponent},
  {path:'citizen-history', component:CitizenhistoryComponent},
  {path:'transaction-id', component:TransactionIdComponent},
  {path:'view-transaction', component:ViewtransactionComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
