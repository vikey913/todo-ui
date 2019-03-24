import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoItem } from '../../modes/todo-item.model';
import { Subscription, Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  toDoItemsList: Array<ToDoItem>;

  constructor(private toDoService: TodoService) {
    this.toDoItemsList = new Array<ToDoItem>();
  }

  ngOnInit() {
    this.subscription = this.toDoService.getToDoSource().subscribe(data => {
      this.toDoItemsList.push(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteItem = (toDoItem: ToDoItem) => {
    this.toDoItemsList = this.toDoItemsList.filter(item => item !== toDoItem);
  }
}
