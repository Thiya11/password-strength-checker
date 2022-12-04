import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';


@Component({
  selector: 'strength-check',
  templateUrl: './strength-check.component.html',
  styleUrls: ['./strength-check.component.scss']
})
export class StrengthCheckComponent implements OnInit,OnChanges {

  //initializing variables....

  @Input()
  public passwordToVerify:string

  @Input()
  public barLabel:string

  @Output() 
  passwordStrength = new EventEmitter<boolean>()//emits the password strenght data each time..

  //strength bar segments variables...

  bar0:string
  bar1:string
  bar2:string
  bar3:string

  //shows the message 'poor,good, not good' below the strength bar..

  msg = ''

//color array shows the color statement for each section..

  private colors = ['darkred', 'orange', 'yellow', 'green' ]  

  constructor() { }

  ngOnInit(): void {
  }

//checking the password strength and checks the password conditions...

  private static checkStrength(pass){

    let barValue = 0;

    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(pass);
    const upperLetters = /[A-Z]+/.test(pass);
    const numbers = /[0-9]+/.test(pass);
    const symbols = regex.test(pass);

    //flag array to contains the different checking conditions...

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    let passedMatches = 0;

    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;

    
  }

  //barvalue shows the password length and the stresngth identification..

  barValue +=2* pass.length + (pass.length >= 10 ? 1:0);
  barValue += passedMatches * 10

  barValue = pass.length <= 8 ? Math.min(barValue,10):barValue

  barValue = passedMatches == 1 ? Math.min(barValue,10):barValue
  barValue = passedMatches == 2 ? Math.min(barValue,20):barValue
  barValue = passedMatches == 3 ? Math.min(barValue,30):barValue
  barValue = passedMatches == 4 ? Math.min(barValue,40):barValue

  return barValue

}

//on each changes in the password string triggers the condition that gives the result.

ngOnChanges(changes:{[propName:string]:SimpleChange}){

  const password = changes.passwordToVerify.currentValue
  this.setBarColors(4,'#DDD')
  if(password){
   const color =  this.getColor(StrengthCheckComponent.checkStrength(password))
   this.setBarColors(color.index,color.col);

   const pwdStrength=StrengthCheckComponent.checkStrength(password)
   pwdStrength === 40 ? this.passwordStrength.emit(true):this.passwordStrength.emit(false)

   //switch condition for showing the messages in the password strength bar..


   switch(color.index){
    case 1:
      this.msg = 'poor';
      break;
    case 2:
      this.msg = 'Not Good';
      break;
    case 3:
      this.msg = 'Average';
      break;
    case 4:
      this.msg = 'Good';
      break;
   }
  }

  else{
    this.msg = ''
  }

}

//get color method used to determine the different colors from the color array..

private getColor(slider){
  let index = 0;

  if(slider<=10)
   index=0
  else if(slider<=20)
   index = 1
  else if(slider<=30)
   index = 2
  else if(slider<=40)
   index = 3
  else
   index=4


   return {
    index: index+1,
    col:this.colors[index]
   }

}

//this method sets the bar array color from the color array...

private setBarColors(count,col) {
  for(let n =0 ; n<count; n++)
   this['bar'+n] = col

}

   

}
