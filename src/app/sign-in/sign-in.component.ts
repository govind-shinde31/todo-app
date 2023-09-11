import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  formData = {
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit(data: any) {
    this.userService.createUser(data).subscribe((res: any) => {
      console.log(res)
    });
  }

}
