import { ICountry } from './country';
import { ICity } from './city';

export interface IDirectory {
  country: ICountry;
  city: ICity;
}
