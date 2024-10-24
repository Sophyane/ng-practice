import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { createStore, select, withProps } from '@ngneat/elf';

@Injectable({
  providedIn: 'root',
})
export class CustomerRepository {
  customerStore = createStore(
    { name: 'customers' },
    withProps<{ customers: Customer[] }>({ customers: [] }),
  );
  customers$ = this.customerStore.pipe(select((state) => state.customers));

  addCustomer(customer: Customer) {
    this.customerStore.update((state) => ({
      customers: [...state.customers, customer],
    }));
  }

  updateCustomer(updatedCustomer: Customer) {
    this.customerStore.update((state) => ({
      customers: state.customers.map((customer) =>
        customer.email === updatedCustomer.email ? updatedCustomer : customer,
      ),
    }));
  }

  deleteCustomer(email: string) {
    this.customerStore.update((state) => ({
      customers: state.customers.filter((customer) => customer.email !== email),
    }));
  }
}
