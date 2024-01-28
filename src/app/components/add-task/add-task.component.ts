import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string;
  day: string;
  reminder: boolean;

  showAddTaskComponent: boolean;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService, private uiService: UiService){
      this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTaskComponent = value))
  }

  submitTask(){
    if(!this.text){
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder = false;

  }

}
