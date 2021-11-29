import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  allTasks:any[] = [];

  constructor(private _httpService: TasksService) { }
  ngOnInit(): void {
  }

  getTasks(): void{
    this.allTasks = this._httpService.tasks;
    console.log(this.allTasks);
  }

}
