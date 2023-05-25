import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { OutputComponent } from '../output/output.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'service/project.service';
import { TransferService } from 'src/app/transfer.service';
import { IEmploy } from 'src/app/service/employ';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  emp : IEmploy[]=[]

/*  
  selectedBooking$: any | null;
  selecteddate$: any;
 */
  constructor(private router: Router, private dialog: MatDialog, private service: ProjectService, private transferService:TransferService) {

  }
  ngOnInit(): void {
 /*    this.transferService.selectedBooking$.subscribe((Bookingid :any|null) => {
      this.selectedBooking$ = Bookingid;
    });
    this.transferService.selectedDates$.subscribe((date:any |null)=>{
      this.selecteddate$=date;
    }) */
  }



  
  valuestart :Date | undefined;
  conirm(v :string ) {
    console.log(v);
   // datedata=this.
/*   this.service.confirm().subscribe((data) => {
      this.emp=data,
  const dialogRef = this.dialog.open(OutputComponent, {
      width: '250px',
    });
    }) */
  }
  confirm(){

  }
  
  

  }

  

  

/*    if(this.selectedBooking$.userId && this.selectedBooking$.Bookingid){
  this.transferService.selectedBooking$(this.selectedBooking$.userid,this.selecteddate$.booking).
  subscribe((response:any)=>{
  const dialogRef = this.dialog.open(OutputComponent, {
    width: '250px',
  });
}); */

