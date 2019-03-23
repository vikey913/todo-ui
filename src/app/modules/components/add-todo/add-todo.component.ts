import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../modes/todo-item.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  item: ToDoItem;
  name: string;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      todoName: ['', Validators.required]
    });
  }

  addItem() {
    console.log('add item' + this.addForm.value.todoName);
  }
}
