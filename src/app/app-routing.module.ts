import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { TestComponent } from './views/test/test.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { CitizenhistoryComponent } from './views/citizenhistory/citizenhistory.component';
import { TransactionIdComponent } from './views/transaction-id/transaction-id.component';

import { FamilyInfoComponent } from './views/family-info/family-info.component';
import { HomeComponent } from './views/home/home.component';
import { BlockComponent } from './views/block/block.component';
import { FamilyDetailsComponent } from './views/family-details/family-details.component';



const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'test',component:TestComponent},
  {path:'admin_dashboard', component:AdminDashboardComponent},
  {path:'citizen-history', component:CitizenhistoryComponent},
  {path:'transaction-id', component:TransactionIdComponent},
  {path:'blocks', component:BlockComponent},
  
 
  {path:'familyInfo', component:FamilyInfoComponent},
  {path:'home', component:HomeComponent},
  {path:'family-details', component:FamilyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
