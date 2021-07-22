import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  servicerdata:any[]=[];
  item:any[]=[];
  sendnotification(item:any):Observable<any>{
    this.item=[];
    this.item.push(item)
    return this.http.post('http://localhost:5000/UserPage/ContactDonors',this.item)
  }
} 
