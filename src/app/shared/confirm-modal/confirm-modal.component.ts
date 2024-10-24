import { Component, inject, input } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [ConfirmDialogModule, ButtonModule, NgClass, DialogModule],
  providers: [ConfirmationService, MessageService, DialogService],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css',
})
export class ConfirmModalComponent {
  customerName = input.required<string>();
  public ref: DynamicDialogRef = inject(DynamicDialogRef);
  config: DynamicDialogConfig = inject(DynamicDialogConfig);

  confirm() {
    this.ref.close('confirmed');
  }

  closeDialog() {
    this.ref.close('declined');
  }
}
