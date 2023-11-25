import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [CommonModule, ButtonComponent, TasksComponent],
})
export class MainComponent {
  title: string = 'Task Tracker';

  toggleAddTask() {
    console.log('toggleAddTask');
  }
}
