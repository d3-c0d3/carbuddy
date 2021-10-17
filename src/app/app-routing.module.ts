import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';

const routes: Routes = [
  {path:'postdetails/:id',component:PostdetailsComponent},
  {path:'',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DashboardComponent,PostdetailsComponent]
