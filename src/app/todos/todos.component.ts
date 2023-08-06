import { Component, OnInit, numberAttribute } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todosTitle: string = "To Do App";
  todos: any;
  limit: number = 10;
  allTodos: number = 0;
  skip: number = 0;
  pages: any[] = [];
  currentPageIndex = 1;


  constructor(private todoService: TodoServiceService) { }


  ngOnInit() {
    this.getTodo();
    // this.text(this.currentPageIndex)
  }
  getTodo() {
    this.todoService.getTodos(this.limit, this.skip).subscribe((data: any) => {
      this.todos = data.todos;
      this.allTodos = data.total;
      // console.log(this.todos)
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
    alert(createTodo);
  
   }

   deleteTodo(id:number){
    this.todoService.deleteTodo(id).subscribe((res:any)=>{
console.log(id);
alert(id);
    })
   }

}

