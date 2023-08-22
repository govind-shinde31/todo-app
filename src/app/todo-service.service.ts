import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
url ="http://127.0.0.1:8000/todo/";



  constructor(private http:HttpClient ) { }

  
  saveTodo(data:any){
  return this.http.post(this.url,data)
  };
  getTodos(limit:number, skip:number){
    // return this.http.get(this.url + '?limit=' + limit + '&skip=' + skip);
    return this.http.get(this.url)
  };

  deleteTodo(id:number){
    return this.http.delete(this.url+'?=id' + id)
  }

}
