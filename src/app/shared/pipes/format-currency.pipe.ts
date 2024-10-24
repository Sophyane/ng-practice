import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyData } from '../../models/country.model';

@Pipe({
  name: 'formatCurrency',
  standalone: true,
})
export class FormatCurrencyPipe implements PipeTransform {
  transform(countryCurrencies: CurrencyData, currentKey: string): string {
    return `${countryCurrencies[currentKey].name} (${countryCurrencies[currentKey].symbol})`;
  }
}
