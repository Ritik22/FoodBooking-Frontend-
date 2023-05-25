import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public addBooking :boolean =false ;
  constructor(private router: Router, private dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  goToBooking() {
    
     this.addBooking=true;
     }

}
