import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaginationComponent } from './todos/pagination/pagination.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ItemComponent } from './todos/item/item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CompleteComponent } from './complete/complete.component';
import { AdminComponent } from './admin/admin.component';
import { RegularuserComponent } from './regularuser/regularuser.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PaginationComponent,
    AddTodoComponent,
    ItemComponent,
    LoginComponent,
    SignInComponent,
    CompleteComponent,
    AdminComponent,
    RegularuserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
