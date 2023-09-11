import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CompleteTodoComponent } from './complete-todo/complete-todo.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {
    path: ' ', component: LoginComponent
  },
  {
    path: 'sign', component: SignInComponent
  },
  {
    path:'complete', component: CompleteTodoComponent
  },
  {
    path:'todos', component: TodosComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
