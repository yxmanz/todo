import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(TodoComponent)
  todoComp!: TodoComponent

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.info('>>> ngAfterViewInit todoComp:', this.todoComp)
  }

  saveTodo() {
    const todo = this.todoComp.getValues()
    console.info('>>>> saveTodo:', todo)
	 alert('Todo saved!')
    this.todoComp.resetForm()
  }
}
