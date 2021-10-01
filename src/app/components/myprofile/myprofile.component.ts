import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CountService } from 'src/app/services/count.service';
//import * as person from 'src/app/components/myprofile/myProfile.json'
import person from 'src/app/components/myprofile/myProfile.json';
import { HttpServiceService } from 'src/app/services/http-service.service';
interface persons {  
  full_name: String;  
  email: String;  
  password : String;
  phone : Number; 
  address : String;
  city : String;
  State : String;
    
}  
  
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})

export class MyprofileComponent implements OnInit {
  
  //personList:{full_name: String;  
    //email: String;  
    //password : String;
    //phone : Number;
    //address : String;
    //city : String;
    //State : String;
    //Type : String;}[] = person;
    private example = person;
    personlist: persons[]=person;
    
 
  constructor(public router : Router, private count : CountService, private service : BookServiceService,private formBuilder : FormBuilder,private httpservice : HttpServiceService) { }
  //person:string[];

  ngOnInit(): void {
    //this.httpservice.get().subscribe((data:any)=>{
    //  this.person=data['result']
    //  console.log(this.person)
   this.getProfile();
   

  }
  homepage(){
    this.router.navigate(['home']);
  }
  //submit(){
   //console.log(this.example);
  //}
  getProfile() {
    this.httpservice.getProfileList().subscribe((res: any) => {
      console.log('res', res);
    })
  }
}
