import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnswerserviceService} from '../answerservice.service'

@Component({
  selector: 'app-answerpage',
  templateUrl: './answerpage.component.html',
  styleUrls: ['./answerpage.component.css']
})
export class AnswerpageComponent implements OnInit {

  constructor(private service1:AnswerserviceService) { }

  public answer:string='';
  public phonenumber:number;
  public arr=[];
  ngOnInit(): void {
  }
  getdata(){
    if(this.answer=='no'){
      alert("please press the yes to give your item to user.")
      return;
    }
    else{
    alert('Thank you for your support.Your response was taken. User may contact to you');
    this.arr=[]
    this.arr.push(this.phonenumber)
  //  console.log(this.arr)
    this.service1.answerdata(this.arr).subscribe(
      (res)=>{
        console.log('response from server',res)
      },(err)=>{
        console.log('error occures',err)
      })
    }
  }

}
