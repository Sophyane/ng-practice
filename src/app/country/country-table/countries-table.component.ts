import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Country, CountryFlag } from '../../models/country.model';
import { TableModule } from 'primeng/table';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ButtonDirective } from 'primeng/button';
import { CountryFacade } from '../country.facade';
import { InputTextModule } from 'primeng/inputtext';
import { FormatCurrencyPipe } from '../../shared/pipes/format-currency.pipe';
import { getKeys } from '../../shared/utils/utils';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';
import { CustomerFormComponent } from '../../customer/customer-form/customer-form.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TableModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    ButtonDirective,
    InputTextModule,
    FormatCurrencyPipe,
    CustomerFormComponent,
    CardComponent,
  ],
  providers: [ConfirmModalComponent],
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.css',
})
export class CountriesTableComponent implements OnInit {
  private countryFacade: CountryFacade = inject(CountryFacade);
  protected readonly getKeys = getKeys;
  protected filteredCountries$!: Observable<Country[]>;
  private countryFlag: CountryFlag = { countryName: '', flag: '' };
  protected queryFormControl = new FormControl<string>('', {
    nonNullable: true,
  });

  ngOnInit() {
    this.filteredCountries$ = this.queryFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.countryFacade.getFilteredCountries$(query)),
    );
  }

  clear() {
    this.queryFormControl.setValue('');
  }
}
