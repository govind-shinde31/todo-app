import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
user: any;
selectedUser = '';
formData = {
firstname: ''
}
constructor(private userService:UserService, taskService:TodoServiceService){}

taskAssign(data:any){
console.log(data)

}
// selectUser(value:string){
//   this.selectedUser = value
//   console.log(value)
// }
}
