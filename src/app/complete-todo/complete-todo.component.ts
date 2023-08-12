import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-complete-todo',
  templateUrl: './complete-todo.component.html',
  styleUrls: ['./complete-todo.component.scss']
})
export class CompleteTodoComponent {
  todosTitle: string = "To Do App";
  todo: any;
  limit: number = 10;
  allTodos: any = 0;
  skip: number = 0;
  pages: any[] = [];
  currentPageIndex = 1;

  constructor(private todoService:TodoServiceService){}
  ngOnInit() {
    this.completedTodo();
    // this.text(this.currentPageIndex)
  }
  completedTodo(){
    this.todoService.getTodos(this.limit, this.skip).subscribe((data: any) => {
      // this.todo = data.todos;
      const completedTodo = data.todos.filter((todo:any)=>{
           return todo.completed === true;
      }) 
      this.todo = completedTodo;
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
    this.completedTodo();

  }

}
