import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output();
  userId = input.required<string>();
  createdTask = output<Pick<Task, 'title' | 'summary' | 'dueDate'>>();
  fb = inject(FormBuilder);
  private tasksService = inject(TasksService);
  taskFormGroup = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    dueDate: ['', Validators.required],
  });

  onCreate() {
    this.tasksService.addTask(this.taskFormGroup.value as Pick<Task, 'title' | 'summary' | 'dueDate'>, this.userId()!);
  }

  onCancel() {
    this.cancel.emit();
  }
}
