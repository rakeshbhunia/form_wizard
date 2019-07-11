import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-weight';
  //model:any ={};
  firstName = 0;
  public isPasswordNotMatch:boolean = true;
  public model:any = {
    //id:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  };
  public user:any = {
    //id:"",
    firstName:"",
    lastName:"",
    email:"",
    mobileNo:""
  };
  public userThree:any ={
    name:"",
    date:""
  };
  public allData: any ={};
  public step:number =1
  // nextUser(ts){

  //   console.log("Step one"+JSON.stringify(ts.value));
  //   // this.model.submitted = true;
  //   // console.log(this.model.firstName.value);
  //   // alert("12");
  // };
  // stepTwo(ns){
  //   console.log("Step two"+JSON.stringify(ns.value));
  // };
  // stepThree(ns3){
  //    console.log("Step Three" + ns3.value);
  //    console.log(ns3.name.value)
  // };
  // nextStep(){
  //   this.step =+ 1;
  // };
onSubmit(e){
 console.log(this.model);
 this.allData={
   'form1':this.model,
   'form2':this.user,
   'form3':this.userThree
 }
 console.log(this.allData);

 //this.nextStep()
};

nextStep(){
  this.step += 1;
}

prvStep(){
  this.step -= 1;
}
  // password and conformpassword match validation 
  passwordMatch()
   {
     //console.log("12" +JSON.stringify(this.model))
     if(this.model.password == this.model.confirmPassword)
     {
       this.isPasswordNotMatch = false;
     }
     else{
       this.isPasswordNotMatch = true;
     }
     //console.log("30" +this.isPasswordNotMatch)
   } 
}
