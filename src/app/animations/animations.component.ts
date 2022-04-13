
import { Component, OnInit } from '@angular/core';
import { fade } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [ fade ]
})
export class AnimationsComponent implements OnInit {


  todos = ['teste', 'novo item', 'eae'];
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  addToList(): void {
    this.todos.push(this.textInput);
    this.textInput = '';
  }

  removeTodo(indexItem: number): void {
    this.todos = this.todos.filter((_, index) => index !== indexItem);
  }

}
