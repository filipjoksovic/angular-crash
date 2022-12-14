import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((task) => {
      console.log(task)
      this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    });
  }
  toggleTask(task: Task) { 
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe((task) => {
      console.log(task);
    });
  }
  addTask(task: Task) { 
    this.taskService.addTask(task).subscribe((task) => { 
      this.tasks.push(task)
    })
  }
}
