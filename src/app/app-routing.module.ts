import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { TestComponent } from './views/test/test.component';

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'test',component:TestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
