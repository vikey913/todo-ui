import { Injectable, OnDestroy } from '@angular/core';
import {ToDoItem} from '../modules/modes/todo-item.model';
import { Observable, Subject, of, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()

export class TodoService {
  private _toDoSource: Subject<ToDoItem>;

  constructor() {
    this._toDoSource = new ReplaySubject<ToDoItem>();
  }

  addTodo = (toDoItem: ToDoItem) => {
    this._toDoSource.next(toDoItem);
  }

  getToDoSource = (): Observable<any> => {
    return this._toDoSource;
  }
}
