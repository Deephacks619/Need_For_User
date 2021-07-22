import { Component,OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private myservice1: UserServiceService) { }
  userdetails :any[]=[];
  username : string="deepak";
  ngOnInit():void{
    
  }
  getdata(){
    this.userdetails=this.myservice1.temp
    this.username= this.userdetails[0].username;
    return this.username;
  }
}
