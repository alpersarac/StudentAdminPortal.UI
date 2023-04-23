import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../models/ui-models/student.models';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students : Student[]=[];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email','mobile','gender'];
  dataSource:MatTableDataSource<Student>= new MatTableDataSource<Student>();

  constructor(private studentService:StudentService){ }

  ngOnInit(): void {
    // Fetch Students
    this.studentService.getStudents()
    .subscribe(
      (successResponse)=>{
        this.students=successResponse;
        this.dataSource=new MatTableDataSource<Student>(this.students);
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

}
