import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserData} from '../user-data';
import {UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-signinuser',
  templateUrl: './signinuser.component.html',
  styleUrls: ['./signinuser.component.css']
})
export class SigninuserComponent  {

  constructor( private myservice : UserServiceService) {

   }
  UserData = new UserData('','','','',null ,'','')

   userkk:any[]=[];

  getuserData(f:any){
    this.userkk.push(f)
    this.myservice.temp=this.userkk
    console.log(this.myservice.temp)
  } 
}
