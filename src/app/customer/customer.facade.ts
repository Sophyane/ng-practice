import { inject, Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { CustomerRepository } from './state/customer.repository';

@Injectable({
  providedIn: 'root',
})
export class CustomerFacade {
  #customerRepository: CustomerRepository = inject(CustomerRepository);
  readonly customers$: Observable<Customer[]> =
    this.#customerRepository.customers$;

  getCustomers(): Observable<Customer[]> {
    return this.customers$;
  }

  addCustomer(customer: Customer): void {
    this.#customerRepository.addCustomer(customer);
  }

  updateCustomer(customer: Customer): void {
    this.#customerRepository.updateCustomer(customer);
  }

  deleteCustomer(customerEmail: string): void {
    this.#customerRepository.deleteCustomer(customerEmail);
  }
}
