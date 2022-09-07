import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task_name: string;
  task_description: string;
  task_status: string;
  reminder: boolean = false;

  @Output() onAddTask = new EventEmitter();
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.task_name) {
      alert('Please input task name');
    }

    const newTask = {
      name: this.task_name,
      description: this.task_description,
      status: this.task_status,
      reminder: this.reminder,
    };
    this.task_description = '';
    this.task_name = '';
    this.task_status = '';
    this.reminder = false;

    console.log('From add task: ', newTask);

    this.onAddTask.emit(newTask);
  }
}
