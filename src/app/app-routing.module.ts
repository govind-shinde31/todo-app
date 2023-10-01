import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodosComponent } from './todos/todos.component';
import { CompleteComponent } from './complete/complete.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'sign', component: SignInComponent
  },
  {
    path:'complete', component:CompleteComponent
  },
  {
    path:'todos', component: TodosComponent
  }, 
  {
    path:'admin', component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
