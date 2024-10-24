import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ButtonDirective } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { Customer } from '../../models/customer.model';
import { CustomersDisplayComponent } from '../customers-display/customers-display.component';
import { Observable } from 'rxjs';
import { CountryFlag } from '../../models/country.model';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
    AsyncPipe,
    ButtonDirective,
    CheckboxModule,
    ConfirmPopupModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    CustomersDisplayComponent,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent {
  #confirmService: ConfirmationService = inject(ConfirmationService);
  #messageService: MessageService = inject(MessageService);
  #fb: FormBuilder = inject(FormBuilder);
  @Output() customerCreatedEvent: EventEmitter<Customer> =
    new EventEmitter<Customer>();
  @Input() countriesWithFlags$!: Observable<CountryFlag[]>;
  countriesWithFlags = input<CountryFlag[]>();

  protected customerFormGroup = this.#fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern('^[0-9]*$')],
    address: ['', Validators.maxLength(100)],
    country: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  createCustomer(event: Event) {
    this.#confirmService.confirm({
      target: event.target as EventTarget,
      message:
        'Are you sure that you want to create the customer ' +
        this.customerFormGroup.get('name')?.value +
        ' ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.#messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Customer created',
        });
        const customer: Customer = {
          name: this.customerFormGroup.get('name')!.value,
          email: this.customerFormGroup.get('email')!.value,
          phone: this.customerFormGroup.get('phone')!.value,
          address: this.customerFormGroup.get('address')!.value,
          country: this.customerFormGroup.get('country')!.getRawValue()
            .countryName,
          terms: this.customerFormGroup.get('terms')!.value,
        };
        this.customerCreatedEvent.emit(customer);
      },
      reject: () => {
        this.#messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Customer not created',
        });
      },
    });
  }
}
