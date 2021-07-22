import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-servicer-details',
  templateUrl: './servicer-details.component.html',
  styleUrls: ['./servicer-details.component.css']
})
export class ServicerDetailsComponent implements OnInit {
  dataarray:any;

  constructor(private service : UserServiceService) {
   }
  ngOnInit(): void {
    this.service.getservicerDetails().subscribe((res)=>{
      this.dataarray=res
      console.log(this.dataarray)
      
    },(err)=>{
      console.log("error occured while retrieving servicer details",err)
    })
  }
  }
  
