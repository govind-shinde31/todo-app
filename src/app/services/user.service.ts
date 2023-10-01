import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl = "http://127.0.0.1:5000/api/user";
loginUrl = "http://127.0.0.1:5000/api/login"

  constructor(private http:HttpClient) { }

  createUser (data:User){
return this.http.post(this.baseUrl, data)
  }

  login(data:any){
    return this.http.post(this.loginUrl, data)
  }
}
