import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  students = [
    { 
      firstName: 'Sophia',
      lastName: 'Price'
    },
    { 
      firstName: 'Daniel',
      lastName: "O'Regan"
    },
    { 
      firstName: 'Seafra',
      lastName: "O'Grady"
    },
    { 
      firstName: 'Niall',
      lastName: 'McCafferty'
    },
    { 
      firstName: 'Conor',
      lastName: 'Booth'
    },
    { 
      firstName: 'Michael',
      lastName: 'Christie'
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
