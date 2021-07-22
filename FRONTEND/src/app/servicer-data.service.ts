import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicerDataService {

  constructor(private http: HttpClient) { }
  ServicerData:any[]=[];
  PostServicer():Observable<any>{
    
    return this.http.post('http://localhost:5000/register',this.ServicerData)
  }
}
