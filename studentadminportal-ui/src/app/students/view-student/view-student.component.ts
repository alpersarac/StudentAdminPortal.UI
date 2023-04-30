import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/api-models/student.models';
import { GenderService } from 'src/app/services/gender.service';
import { Gender } from 'src/app/models/api-models/gender.models';

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
    private readonly route:ActivatedRoute, private readonly genderService:GenderService) {  }

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

}
