import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'service/project.service';
import { IEmploy } from 'src/app/service/employ';
import { TransferService } from 'src/app/transfer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isText!: boolean;
  eyeIcon!: string | "fa-eye-slash";
  type!: string | "Password";
  selectedProduct: any;
  myForm: FormGroup;
  message: string = "";
  userError: any;
  userid :string | null=null;
  employ:IEmploy | undefined

  constructor(public fb: FormBuilder,private service:ProjectService ,private router:Router, private transferService:TransferService) { 

    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }

//1
 /* onSubmit(form :any) :void{
   this.service.onSubmit(this.myForm.value).subscribe({
    next:(res)=>
  {
   const response ={eid:this.userid};
    alert(res.message);
   
    this.router.navigate(['DashBoard',response])
  },
  })
} */

   onSubmit(form :any) :void{
    this.service.onSubmit(this.myForm.value).subscribe
    (data=>
    {

      const response=
      this.service.ListEmploy=data;
const resforBooking=this.transferService.setProduct(this.employ?.Eid); //sending id
   console.log(response)
   
      this.router.navigate(['DashBoard', response])

   });
  } 
  ngOnInit(): void {
  }
  // onSelectedProduct(id) {
  //   this.transferService.setProduct(id );

}
