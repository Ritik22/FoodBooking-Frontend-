import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-cleander',
  templateUrl: './cleander.component.html',
  styleUrls: ['./cleander.component.css']
})
export class CleanderComponent implements OnInit {
  disabledDates: Date[] = [];

  constructor() { }
  selected: Date | null | undefined;
  ngOnInit() {
  
    }
  }

