import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../interfaces/Todo";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;
  // @Output() outputInfo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() outputDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() outputChange: EventEmitter<number> = new EventEmitter<number>();

  editVar = false;

  constructor() {
  }

  ngOnInit() {
  }

  // editComponent() {
  //   this.outputInfo.emit(Object.assign(this.todo));
  // }

  deleteComponent():void {
    this.outputDelete.emit(this.todo.id);
  }

  changeComponent():void {
    this.outputChange.emit(this.todo.id);
  }

  changeVar():void {
    this.editVar = !this.editVar;
  }

  newText(text: string):void {
    this.todo.text = text;
    this.editVar = !this.editVar;
  }
}
