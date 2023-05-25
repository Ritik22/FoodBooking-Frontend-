import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferService {
 private BookingSubject$ =new BehaviorSubject<any>([]);
 private selectDatesubject$=new BehaviorSubject<any>([]); 
 selectedBooking$ = this.BookingSubject$.asObservable();
  selectedDates$ = this.selectDatesubject$.asObservable();
  
  
  constructor() { }
  setProduct(Bookingid :any ){
    this.BookingSubject$.next(Bookingid);
  }
  setSelectedDate(date: any ) {
    this.BookingSubject$.next(date);
  }
}
