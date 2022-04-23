import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = []
  public text: string = 'text';

  public clear() {
    this.text = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
