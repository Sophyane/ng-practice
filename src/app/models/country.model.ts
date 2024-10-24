export interface Country {
  name: CountryName;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Record<string, string>;
  flag: string;
  flags: Flags;
  regionalBlocs?: RegionalBloc[];
}

export interface CountryName {
  common: string;
  nativeName?: Record<string, { official: string; common: string }>;
}

export interface Currency {
  name: string;
  symbol: string;
}

export type CurrencyData = Record<string, Currency>;

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms?: string[];
  otherNames?: string[];
}

export interface CountryFlag {
  countryName: string;
  flag: string;
}
