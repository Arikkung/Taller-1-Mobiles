import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {

  //Nota: @Input permite almacenar datos a través del componente al importarse.
  @Input() tasks: { title: string, description: string, done: boolean; }[] = [];

  constructor() { }

  public updateTask(index: number, done: boolean): void {
    this.tasks[index].done = done;
  }
  ngOnInit() {}

}
