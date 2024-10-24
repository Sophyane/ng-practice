import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Country, CountryFlag } from '../models/country.model';
import { CountryService } from './country.service';
import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';

@Injectable({ providedIn: 'root' })
export class CountryFacade {
  private countryService: CountryService = inject(CountryService);
  readonly countries$: Observable<Country[]> = this.countryService
    .getCountries()
    .pipe(
      catchError((error) => {
        console.error('Error fetching countries:', error);
        return EMPTY;
      }),
    );
  readonly signalCountries = this.countryService.getSignalCountries();
  readonly countriesWithFlags$ = this.retrieveCountriesWithFlag$();

  getFilteredCountries$(query: string): Observable<Country[]> {
    return this.countries$.pipe(
      map((countries) => {
        return countries.filter((country) => {
          return !query
            ? countries
            : country.name.common.toLowerCase().includes(query.toLowerCase());
        });
      }),
      catchError((err) => {
        console.error('Error fetching countries: ', err);
        return EMPTY;
      }),
    );
  }

  getSignalFilteredCountries() {
    signalSlice({
      initialState: this.countries$,
    });
  }

  retrieveCountriesWithFlag$(): Observable<CountryFlag[]> {
    return this.countries$.pipe(
      map((country) => {
        return country.map((country) => {
          return {
            countryName: country.name.common,
            flag: country.flags.png,
          };
        });
      }),
      catchError((error) => {
        console.error('Error retrieving countries with their flags: ', error);
        return EMPTY;
      }),
    );
  }
}
