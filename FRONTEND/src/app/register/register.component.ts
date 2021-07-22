import { Component } from '@angular/core';
import {NgForm } from '@angular/forms';
import {SwPush} from '@angular/service-worker';
//import { NotificationService} from './notification-service';
import {ServicerDataService} from '../servicer-data.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  readonly VAPID_PUBLIC_KEY =  "BIZYjnlpq4ECn7iQ2yojrZqGwwbjAuyrFPHBBpDv8rzjn95DFPBQXEX8aZ7GqIsuW4kp52-lHmpC1-9GKMs1lj0";

  constructor( private myservice2:ServicerDataService,private swPush:SwPush) {
    this.subscribeToNotifications();

 //   this.swPush.messages.subscribe(message=>console.log(message));

    this.swPush.notificationClicks.subscribe(
      ({action,notification})=>{
        console.log(action)
          window.open(notification.data.url,null);
      });
   }
   endpoint :any[]=[];
   subscribeToNotifications(){
     if(this.swPush.isEnabled){
      // this.swPush.notificationClicks.subscribe(x=>console.log(x))
      this.swPush.requestSubscription({
        serverPublicKey:this.VAPID_PUBLIC_KEY
      })
      .then(sub=>{console.log(JSON.stringify(sub))
        this.endpoint.push(JSON.stringify(sub))
      })
      .catch(err=>console.error("could not subscribe to notifications",err))
   }}

  ServicerData:any[]=[]

  getregisterData(f:NgForm){
    let val=f.value
  //  console.log(val)
    this.ServicerData=[]
    this.ServicerData.push(val)
    this.ServicerData.push(this.endpoint)

 //   console.log(this.ServicerData)
    this.myservice2.ServicerData=this.ServicerData

    //posting data through service
    this.myservice2.PostServicer().subscribe((res)=>{ 
        console.log("response from database server",res)
    },err=>{
        console.log("error occured while posting data",err)
    })
  }
}
