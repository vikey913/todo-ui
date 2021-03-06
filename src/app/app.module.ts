import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './modules/components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './modules/components/update-todo/update-todo.component';
import { CompletedTodoComponent } from './modules/components/completed-todo/completed-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    CompletedTodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
