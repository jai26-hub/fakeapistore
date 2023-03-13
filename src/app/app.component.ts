import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // allUser:object;
  title = 'fakeapi';
  // allUser:any=[];
  // makes: any[] = [];
  // arr:any=[];
  allUser:any={};

  
  constructor(private apiservice:ApiServiceService){}
  ngOnInit(){
this.allUsers();
  }
  allUsers(){
this.apiservice.getAllUsers().subscribe((response)=>{
this.allUser = response;
})
}
}
