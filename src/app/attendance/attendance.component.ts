import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  students = [
    {
      firstName: 'Sophia',
      lastName: 'Price',
      group: 'Software Group A'
    },
    {
      firstName: 'Daniel',
      lastName: "O'Regan",
      group: 'Software Group A'
    },
    {
      firstName: 'Seafra',
      lastName: "O'Grady",
      group: 'Software Group A'
    },
    {
      firstName: 'Niall',
      lastName: 'McCafferty',
      group: 'Software Group B'
    },
    {
      firstName: 'Conor',
      lastName: 'Booth',
      group: 'Software Group B'
    },
    {
      firstName: 'Michael',
      lastName: 'Christie',
      group: 'Software Group B'
    },
    {
      firstName: 'Alan',
      lastName: 'Sweeney',
      group: 'Systems Group C'
    },
    {
      firstName: 'Daniel',
      lastName: "Ziki",
      group: 'Systems Group C'
    },
    {
      firstName: 'Josh',
      lastName: "Gallagher",
      group: 'Systems Group C'
    },
    {
      firstName: 'Kamil',
      lastName: 'Fedorko',
      group: 'Systems Group D'
    },
    {
      firstName: 'Daniel',
      lastName: 'Kowalski',
      group: 'Systems Group D'
    },
    {
      firstName: 'Rebecca',
      lastName: 'Murray',
      group: 'Systems Group D'
    }];

    filteredStudents = [];

  groups = [
    {
      title: 'Software Group A'
    },
    {
      title: 'Software Group B'
    },
    {
      title: 'Systems Group C'
    },
    {
      title: 'Systems Group D'
    }];

  constructor() {
    this.filteredStudents = this.students;
  }

  openRecord(group) {
    this.filteredStudents = [];
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].group == group.title) {
          this.filteredStudents.push(this.students[i])
        }        
      } 
  }

  ngOnInit() {
  }

}
