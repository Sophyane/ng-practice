import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { GlobalContainerComponent } from './global-container.component';
import { CountryFacade } from '../../country/country.facade';
import { CustomerFacade } from '../../customer/customer.facade';
import { CustomerFormComponent } from '../../customer/customer-form/customer-form.component';
import { CountriesTableComponent } from '../../country/country-table/countries-table.component';
import { CustomersDisplayComponent } from '../../customer/customers-display/customers-display.component';

describe('GlobalContainerComponent', () => {
  let spectator: Spectator<GlobalContainerComponent>;
  const createComponent = createComponentFactory({
    component: GlobalContainerComponent,
    imports: [
      CustomerFormComponent,
      CountriesTableComponent,
      CustomersDisplayComponent,
    ],
    mocks: [CustomerFacade, CountryFacade],
    detectChanges: false,
  });

  beforeEach(() => {
    return (spectator = createComponent());
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
