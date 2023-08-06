import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() addItem = new EventEmitter<string>();
  Todos: string = "To Do App";
  items = '';
constructor(){}

  createTodos(data:string){
    this.items = data;
    this.addItem.emit(this.items);
    console.log(this.items)
    }
}
