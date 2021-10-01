import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CountService } from 'src/app/services/count.service';
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
  
    private example = person;
    personlist: persons[]=person;
    
 
  constructor(public router : Router, private count : CountService, private service : BookServiceService,private formBuilder : FormBuilder,private httpservice : HttpServiceService) { }
  //person:string[];

  ngOnInit(): void {
    
  }
  homepage(){
    this.router.navigate(['home']);
  }
  
}
