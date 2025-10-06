import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CustomerRepository } from './customer.repository';
import { Customer } from '../../models/customer.model';

describe('CustomerRepository', () => {
  let spectator: SpectatorService<CustomerRepository>;

  const createService = createServiceFactory(CustomerRepository);
  beforeEach(() => {
    spectator = createService();
  });

  it('should create the service', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should initialize with an empty customers array', () => {
    spectator.service.customers$.subscribe((customers) => {
      expect(customers).toEqual([]);
    });
  });

  it('should add a customer', () => {
    const customer: Customer = {
      address: '12 rue de la liberté',
      country: 'France',
      phone: '0650505050',
      terms: true,
      name: 'John Doe',
      email: 'john@example.com',
    };

    spectator.service.addCustomer(customer);

    spectator.service.customers$.subscribe((customers) => {
      expect(customers).toContain(customer);
    });
  });

  it('should update a customer', () => {
    const customer: Customer = {
      address: '12 rue de la liberté',
      country: 'France',
      phone: '0650505050',
      terms: true,
      name: 'John Doe',
      email: 'john@example.com',
    };

    spectator.service.addCustomer(customer);

    const updatedCustomer: Customer = {
      address: '12 rue de la liberté',
      country: 'France',
      phone: '0650505050',
      terms: false,
      name: 'John Doe',
      email: 'john@example.com',
    };

    spectator.service.updateCustomer(updatedCustomer);

    spectator.service.customers$.subscribe((customers) => {
      expect(customers).toContain(updatedCustomer);
      expect(customers).not.toContain(customer);
    });
  });

  it('should delete a customer', () => {
    const customer: Customer = {
      address: '12 rue de la liberté',
      country: 'France',
      phone: '0650505050',
      terms: true,
      name: 'John Doe',
      email: 'john@example.com',
    };
    spectator.service.addCustomer(customer);

    spectator.service.deleteCustomer(customer.email);

    spectator.service.customers$.subscribe((customers) => {
      expect(customers).not.toContain(customer);
    });
  });
});
