import { Component,EventEmitter,Input, Output } from '@angular/core';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  delete = faTrashCan;
  @Input()
  todoItem: any;
  @Output () deleteTodo = new EventEmitter<number>();


onDeleteTodo(id:number){
  this.deleteTodo.emit(id);

}
}
