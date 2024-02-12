import { Component } from '@angular/core';

class Student{
  name! : string
  score! : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-table';
  students: Student[] = [
    {
      name: "Het Jasani",
      score: "98"
    },
    {
      name: "Yash Raiyani",
      score: "78"
    },   {
      name: "Dhruv Vadher",
      score: "66"
    },   {
      name: "Priyanshu Rathod",
      score: "79"
    },   {
      name: "Jeel Gadhia",
      score: "81"
    },
  ]
}
