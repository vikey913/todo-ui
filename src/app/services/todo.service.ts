import { Injectable, OnDestroy } from '@angular/core';
import {ToDoItem} from '../modules/modes/todo-item.model';
import { Observable, Subject, of, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()

export class TodoService {
  private _toDoUpdateSource: Subject<ToDoItem>;
  private _toDoCompleteSource: Subject<ToDoItem>;

  constructor() {
    this._toDoUpdateSource = new Subject<ToDoItem>();
    this._toDoCompleteSource = new Subject<ToDoItem>();
  }

  addTodo = (toDoItem: ToDoItem) => {
    this._toDoUpdateSource.next(toDoItem);
  }

  completeToDo = (toDoItem: ToDoItem) => {
    this._toDoCompleteSource.next(toDoItem);
  }

  getToDoUpdateSource = (): Observable<any> => {
    return this._toDoUpdateSource;
  }

  getToDoCompleteSource = (): Observable<any> => {
    return this._toDoCompleteSource;
  }
}
