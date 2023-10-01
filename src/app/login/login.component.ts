import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formData = {
    email : '',
    password : ''
  }
  constructor(private userService:UserService, private router:Router){}

  login(data:any){
    console.log(data)
   
   this.userService.login(data).subscribe((res=>{
    console.log(res)
   if (data) {
    setTimeout(() => {
      this.router.navigate(['admin']);
      console.log()

    }, 1000);
    } else {
         setTimeout(() => {
        this.router.navigate(['complete']);
  
      }, 1000);
    }
   }))

  }

}
