import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Student{
  id: number;
  name: string,
  age: number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-crd';
  students: Student[] = [];


  onSubmit(form: NgForm){
    const newStudent : Student = {
      ...form.value,
      id: this.students.length + 1
    };
    this.students.push(newStudent);
  }

  delete(id: number){
    console.log(id);
    this.students.splice(id, 1);
  }
}
