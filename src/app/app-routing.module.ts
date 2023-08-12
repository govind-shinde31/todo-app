import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteTodoComponent } from './complete-todo/complete-todo.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '', component: TodosComponent
  },
  {
    path: 'complete', component: CompleteTodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
