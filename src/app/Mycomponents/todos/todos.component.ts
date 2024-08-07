import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'; // Adjusted import path
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component"; // Adjusted import path

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent, AddTodoComponent], // Add FormsModule to imports
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit { 
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        sno: 1,
        title: 'This is title 1',
        desc: 'This is description 1',
        active: true
      },
      {
        sno: 2,
        title: 'This is title 2',
        desc: 'This is description 2',
        active: true
      },
      {
        sno: 3,
        title: 'This is title 3',
        desc: 'This is description 3',
        active: true
      }
    ];
  }
  deleteTodo(todo: Todo) {

    console.log("Delete todo", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo) { 
    console.log("Add todo", todo);
    this.todos.push(todo);
  }
}