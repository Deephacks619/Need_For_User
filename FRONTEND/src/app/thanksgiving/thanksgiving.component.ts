import { Component, OnInit } from '@angular/core';
import {ServicerDataService} from '../servicer-data.service'
@Component({
  selector: 'app-thanksgiving',
  templateUrl: './thanksgiving.component.html',
  styleUrls: ['./thanksgiving.component.css']
})
export class ThanksgivingComponent implements OnInit {

  constructor(private myservice3: ServicerDataService) { }

  ngOnInit(): void {
  }
  username:string;
  getusername(){
    this.username=this.myservice3.ServicerData[0].username;
    return this.username
  }
}
