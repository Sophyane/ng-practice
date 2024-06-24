import { Component, inject, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {
  cancel = output();
  createdTask = output<Pick<Task, 'title' | 'summary' | 'dueDate'>>();
  fb = inject(FormBuilder);
  taskFormGroup = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    dueDate: ['', Validators.required],
  });

  ngOnInit() {
    this.taskFormGroup.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onCreate() {
    this.createdTask.emit(this.taskFormGroup.value as Pick<Task, 'title' | 'summary' | 'dueDate'>);
    console.log(this.taskFormGroup.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
