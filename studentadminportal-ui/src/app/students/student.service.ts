import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.models';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl='https://localhost:7063';

  constructor(private httpClient:HttpClient) {
    //test
  }
  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl+'/Student');
  }
}
