import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.models';
import { UpdateStudentRequest } from '../models/api-models/update-student-request';
import { AddStudentRequest } from '../models/api-models/add-student-request.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl='https://localhost:7063';

  constructor(private httpClient:HttpClient) {
    //test
  }
  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl+'/student');
  }
  getStudent(studentId:string):Observable<Student>{
    return this.httpClient.get<Student>(this.baseApiUrl+'/student/'+studentId)
  }
  updateStudent(studentId:string,studentRequest:Student):Observable<Student>{
    const updateStudentRequest:UpdateStudentRequest={
      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress,
    };
    return this.httpClient.put<Student>(this.baseApiUrl+'/student/'+studentId,updateStudentRequest);
  }
  deleteStudent(studentId:string):Observable<Student>{
    return this.httpClient.delete<Student>(this.baseApiUrl+'/student/'+studentId);
  }
  addStudent(studentRequest:Student):Observable<Student>{
    const addStudentRequest:AddStudentRequest={
      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress,
    };
    return this.httpClient.post<Student>(this.baseApiUrl+'/student/add',addStudentRequest)
  }
}
