import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos: Todo[] = [];
  filtroActual: filtrosValidos

  constructor(private Store: Store<AppState>) { }

  ngOnInit(): void {
    // this.Store.select('todos').subscribe(todos => this.todos = todos)

    this.Store.subscribe(state => {

      this.todos = state.todos;
      this.filtroActual = state.filtro
    })
  }

}
