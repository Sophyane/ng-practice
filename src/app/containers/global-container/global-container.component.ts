import { Component, inject } from '@angular/core';
import { CustomerFormComponent } from '../../customer/customer-form/customer-form.component';
import { CountriesTableComponent } from '../../country/country-table/countries-table.component';
import { CustomerFacade } from '../../customer/customer.facade';
import { CountryFacade } from '../../country/country.facade';
import { CustomersDisplayComponent } from '../../customer/customers-display/customers-display.component';
import { AsyncPipe } from '@angular/common';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-global-container',
  standalone: true,
  imports: [
    CustomerFormComponent,
    CountriesTableComponent,
    CustomersDisplayComponent,
    AsyncPipe,
  ],
  templateUrl: './global-container.component.html',
  styleUrl: './global-container.component.css',
})
export class GlobalContainerComponent {
  #countryFacade: CountryFacade = inject(CountryFacade);
  #customerFacade: CustomerFacade = inject(CustomerFacade);

  customers$ = this.#customerFacade.customers$;
  countriesWithFlags$ = this.#countryFacade.countriesWithFlags$;

  createCustomer(customer: Customer) {
    this.#customerFacade.addCustomer(customer);
  }

  customerToDelete(email: string) {
    this.#customerFacade.deleteCustomer(email);
  }
}
