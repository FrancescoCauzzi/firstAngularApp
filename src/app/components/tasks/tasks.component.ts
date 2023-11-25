import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [CommonModule, TaskItemComponent],
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
