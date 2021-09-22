import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;

  constructor(public service:UserServiceService) { }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  submit() {
    console.log(this.form.valid); 
      if (this.form.valid) {
        let data = {
          "fullName": this.form.controls.name.value,
          "email": this.form.controls.userName.value,
          "password": this.form.controls.password.value,
          "phone": this.form.controls.number.value
        }
        //console.log(data)
        this.service.signup(data).subscribe((data:any) => {
          //console.log(data)
          localStorage.setItem("fullName", data["fullName"]);
          localStorage.setItem("email", data["email"]);
          localStorage.setItem("password",data["password"]);
          localStorage.setItem("phone",data["phone"]);
          console.log("signup successfully",data)
        });
      }
  }

  ngOnInit(): void {
  }

}
