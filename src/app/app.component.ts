import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timeout } from 'rxjs';
import { TodosComponent } from "./Mycomponents/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTest';
//  constructor() {
//   setTimeout(() => {
//     this.title = 'Changed Title';
//   }, 2000);

//  }
}
