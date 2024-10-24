import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListboxClickEvent, ListboxModule } from 'primeng/listbox';
import { Customer } from '../../models/customer.model';
import { AsyncPipe } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-customers-display',
  standalone: true,
  imports: [ListboxModule, AsyncPipe, Button],
  templateUrl: './customers-display.component.html',
  styleUrl: './customers-display.component.css',
})
export class CustomersDisplayComponent {
  @Input() customers: Customer[] | null = [];
  @Output() deleteCustomerEvent: EventEmitter<string> =
    new EventEmitter<string>();

  deleteCustomer(event: ListboxClickEvent) {
    this.deleteCustomerEvent.emit(event.option.email);
  }
}
