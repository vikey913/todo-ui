import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoItem } from '../../modes/todo-item.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit, OnDestroy {
  toDoItem: ToDoItem;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.createForm();
    this.toDoItem = null;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      todoName: ['', Validators.required]
    });
  }

  addItem() {
    this.toDoItem = new ToDoItem();
    this.toDoItem.id = Date.now();
    this.toDoItem.displayName = this.addForm.value.todoName;
    this.toDoItem.completed = false;
    this.todoService.addTodo(this.toDoItem);
  }
}
