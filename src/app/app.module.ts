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
import { CompleteTodoComponent } from './complete-todo/complete-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PaginationComponent,
    AddTodoComponent,
    ItemComponent,
    CompleteTodoComponent
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
