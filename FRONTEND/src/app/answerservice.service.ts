import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerserviceService {

  constructor(private http:HttpClient) { }

  answerdata(arr):Observable<any>{
    return this.http.post('http://localhost:5000/answerPage',arr)
  }
}
