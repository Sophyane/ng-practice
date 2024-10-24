import { inject, Injectable, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  #http: HttpClient = inject(HttpClient);
  readonly #urlApi = 'https://restcountries.com/v3.1/all';

  getCountries(): Observable<Country[]> {
    return this.#http.get<Country[]>(this.#urlApi);
  }

  getSignalCountries(): Signal<Country[] | undefined> {
    return toSignal(this.#http.get<Country[]>(this.#urlApi));
  }
}
