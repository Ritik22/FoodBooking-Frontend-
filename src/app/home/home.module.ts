import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CleanderComponent } from './cleander/cleander.component';
import { FormBuilder, FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from "@angular/material/core";
import { Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookingComponent } from './booking/booking.component';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from '@angular/material/dialog';
import { OutputComponent } from './output/output.component';
import { QRCodeModule } from 'angularx-qrcode';
const routes: Routes = [
  {
    path:'Calendar' , component:CleanderComponent
  },
 { path:'booking',component:BookingComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    CleanderComponent,
    BookingComponent,
    OutputComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    QRCodeModule,
  
    
    
  ],
  exports:[
    DashboardComponent,
    BookingComponent
  ]
})
export class HomeModule { }
