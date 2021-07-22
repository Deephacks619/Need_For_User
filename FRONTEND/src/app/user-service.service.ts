import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http: HttpClient) { }
  temp:any[]=[];

  getservicerDetails():Observable<any>{
    return this.http.get('http://localhost:5000/UserPage/ServicerDetails')
  }
  
}
