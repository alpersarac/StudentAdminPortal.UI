import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl='';

  constructor(private httpClient:HttpClient) {

  }
  getStudents(): Observable<any>{
    return this.httpClient.get<any>(this.baseApiUrl+'/students');
  }
}
