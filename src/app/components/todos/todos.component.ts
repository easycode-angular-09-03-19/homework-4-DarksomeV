import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../../interfaces/Todo";
import {FormsModule, NgForm} from "@angular/forms";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @ViewChild('addTodoForm') form: NgForm;

  public newTodo: Todo = {
    id: null,
    text: '',
    completed: false
  };

  todoItems: Array<Todo> = [
    {
      id: 0,
      text: 'Test task 1',
      completed: false
    },
    {
      id: 1,
      text: 'Test task 2',
      completed: false
    },
    {
      id: 2,
      text: 'Test task 3',
      completed: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    const newTodo: Todo = {
      id: this.todoItems.length,
      text: form.value.text,
      completed: false
    };

    this.todoItems.push(newTodo);
    this.form.resetForm();
  };

  // onOutputEdit(data) {
  //   data.text = 'new';
  // }

  onOutputComplete(id:number):void {
    this.todoItems.forEach(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    })
  }

  completeAll():void {
    this.todoItems.forEach(item => {
      item.completed = true;
    });
  }


  onOutputDelete(id:number):void {
    let confirmDelete = confirm("Уверены в том, чтобы удалить?");
    if (confirmDelete) {
      this.todoItems = this.todoItems.filter(todo => todo.id != id);
    }
  }

}
