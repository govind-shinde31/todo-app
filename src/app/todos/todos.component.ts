import { Component, OnInit, numberAttribute } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todosTitle: string = "To Do App";
  todo:any;
  limit: number = 10;
  allTodos: number = 0;
  skip: number = 0;
  pages: any[] = [];
  currentPageIndex = 1;


  constructor(private todoService: TodoServiceService) {}


  ngOnInit() {
    this.getTodo();
  }
  getTodo() {
    this.todoService.getTodos(this.limit, this.skip).subscribe((data: any) => {
      this.todo = data;
      this.allTodos = data.total;
      let page = this.allTodos / this.limit;
      if (this.pages.length === 0) {
        for (let i = 1; i <= page; i++) {
          this.pages.push(i);
        }
      }
    });
  }
  changePage(selectedPage:number){
     this.currentPageIndex = selectedPage;
    this.skip = (selectedPage - 1) * this.limit;
     console.log(this.currentPageIndex)
     this.getTodo();

   }

   addTodo(createTodo:string){
    this.todoService.saveTodo(createTodo).subscribe((res:any)=>{
      console.log(res)
    })
  
   }

   deleteTodo(id:number){
    this.todoService.deleteTodo(id).subscribe((res:any)=>{
      console.log(res);
      alert(res);
      return res;
    })
   }

}


