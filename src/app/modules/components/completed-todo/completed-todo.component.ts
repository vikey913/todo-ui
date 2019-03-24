import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { ToDoItem } from '../../modes/todo-item.model';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  toDoItemsList: Array<ToDoItem>;

  constructor(private todoService: TodoService) {
    this.toDoItemsList = new Array<ToDoItem>();
  }

  ngOnInit() {
    this.subscription = this.todoService.getToDoCompleteSource().subscribe(data => {
      this.toDoItemsList.push(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkValue = (todoItem: ToDoItem) => {
    this.deleteItem(todoItem);
    this.todoService.addTodo(todoItem);
  }

  deleteItem = (toDoItem: ToDoItem) => {
    this.toDoItemsList = this.toDoItemsList.filter(item => item !== toDoItem);
  }
}
