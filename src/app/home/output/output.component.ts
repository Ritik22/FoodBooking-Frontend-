import { Component, OnInit } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  myAngularxQrCode: string;

  constructor(private router: Router, private dialog: MatDialog) { 
    this.myAngularxQrCode = 'ItSoluionStuff.com';

  }

  ngOnInit(): void {
  }

}
