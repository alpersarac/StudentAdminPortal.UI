import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/api-models/student.models';
import { GenderService } from 'src/app/services/gender.service';
import { Gender } from 'src/app/models/api-models/gender.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{
  studentId: string | null | undefined;
  genderList:Gender[]=[];
  student:Student={
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    genderId: '',
    profileImageUrl: '',
    gender: {
      id: '',
      description: ''
    },
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: ''
    }
  };
  constructor(private readonly studentService: StudentService,
    private readonly route:ActivatedRoute, private readonly genderService:GenderService,
    private snackbar:MatSnackBar) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        this.studentId=params.get('id');

        if(this.studentId){
          this.studentService.getStudent(this.studentId)
          .subscribe(
            (successResponse)=>{
              this.student=successResponse;
            }
          );
              this.genderService.getGenderList()
              .subscribe(
                (successResponse)=>{
                  this.genderList=successResponse;
                }
              )
        }
      }
    );
  }
  onUpdate():void{
    this.studentService.updateStudent(this.student.id,this.student)
    .subscribe(
      (successResponse)=>{
        console.log(successResponse);
        //show notification
        this.snackbar.open('Student updated successfully,',undefined,{
          duration:2000
        })
      },
      (errorResponse)=>{
        //log it
      }
    );
  }
  onDelete():void{

  }
}
