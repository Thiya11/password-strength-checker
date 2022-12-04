import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sendingService } from './dataserve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

//initializing variables
  title = 'password';
  passwordIsValid:boolean = false
  userProfile

  //formgroup contains the all input values

 form:FormGroup = this.fb.group({
  fullName:[null,[
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern(/^[A-z]*$/),
    Validators.minLength(3)
  ]],
  userName:[null,[
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[A-z0-9]*$/),
    Validators.maxLength(30)
  ]],
  email:[null,[
    Validators.required,
    Validators.email
  ]],
  password:[null,[
    Validators.required,
  ]]

 })

 //injecting formbuilder and httpservice 

  constructor(private fb:FormBuilder, private service:sendingService){
    
  }
   ngOnInit() {
    
  }

//submiting function after successfully form created

  submit(){
   
    //object data sent to backend...

    this.userProfile = {
       fullName:this.form.controls.fullName.value,
       user_name:this.form.controls.userName.value,
       email:this.form.controls.email.value,
       password:this.form.controls.password.value
    }

    //subscribing posted data for verification purpose only..

    this.service.addUser(JSON.stringify(this.userProfile))
    .subscribe((res)=>{
      console.log('response from post data', res)
    },
    (error)=>{
      console.log(error)
    })

    // this.service.getPayload().subscribe(data=>{
    //   console.log(data)
    //   localStorage.setItem('payload',Object.values(data).toString())})
  }

  //sending the boolean data abour password valid..

  passwordValid(event){
    this.passwordIsValid = event
  }

  // check(){
  //   console.log(localStorage.getItem('payload'))
  // }
}
