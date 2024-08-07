import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] // Corrected styleUrl to styleUrls
})
export class AddTodoComponent {

  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.title = '';
    this.desc = '';
  }

  onSubmit() {
    const todo: Todo = {
      sno: 4,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
    // Add any additional logic here if needed
  } // Ensure the method is properly closed
}