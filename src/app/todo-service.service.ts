import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
url ='http://127.0.0.1:5000/api/todo';

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


  constructor(private http:HttpClient ) { }

  
  saveTodo(data:any){
  return this.http.post('http://127.0.0.1:5000/api/todo',{"title": data}, this.httpOptions)
  };
  
  getTodos(limit:number, skip:number){
    // return this.http.get(this.url + '?limit=' + limit + '&skip=' + skip);
    return this.http.get('http://127.0.0.1:5000/api/todo')
  };

  deleteTodo(id:number){
    return this.http.delete(this.url + '/' + id)
  }

}
