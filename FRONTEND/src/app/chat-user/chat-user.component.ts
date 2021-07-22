import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../data.service'
@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  constructor(private servicek:DataService) { }
  public isshown:boolean = true;
  data:any[]=[];
  item:string=""
  ngOnInit(): void {
  }
  func(){
  //  console.log(this.item)
  
    this.servicek.sendnotification(this.item).subscribe((res)=>{
      console.log(res)
      for(var i=0;i<res.length;i++){
        this.data.push(res[i])
      }
      console.log(this.data)

    },err=>{
      console.log("error",err)
    })
    alert("please wait some time for getting servicer data who accepted your request")
    this.isshown=false;
 
  }
} 
