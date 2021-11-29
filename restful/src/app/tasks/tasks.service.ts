import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: any[] = [];

  constructor(private _http: HttpClient) { 

    this.fetchTasks();
    this.selectTask( '');
  }

  fetchTasks(): void{
    this._http.get( "http://localhost:8080/tasks" )
    .subscribe((data:any)=>{
      this.tasks = data;
      console.log("This will get all the tasks");
      console.log(data);
      
    });
  }

  selectTask( title:string ): void{
    this._http.get('http://localhost:8080/tasks' + window.location.href.substr(window.location.href.lastIndexOf('/')))
    .subscribe( (data:any) =>{
      console.log(data);
    });
  }
}
