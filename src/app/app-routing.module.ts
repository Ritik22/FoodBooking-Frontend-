import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BookingComponent } from './home/booking/booking.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
  path:'DashBoard' ,component:DashboardComponent
  },
  { path: 'booking', component: BookingComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
