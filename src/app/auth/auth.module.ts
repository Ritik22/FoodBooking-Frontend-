import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
const routes: Routes = [
  {
   // path: 'DashBoard', component: DashboardComponent
  },

];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports :[
    LoginComponent
  ]
})
export class AuthModule { }
