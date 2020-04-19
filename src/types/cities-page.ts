import { ICountry } from './common/country';
import { ICity } from './common/city';

export interface ICitiesResponse {
  entry_data: {
    LocationsDirectoryPage: ICityContent[];
  };
}

export interface ICityContent {
  country_directory_page: boolean;
  country_info: ICountry;
  city_list: ICity[];
  next_page: number;
  logging_page_id: string;
}

export interface ICitiesResult {
  country_info: ICountry | null;
  city_list: ICity[] | null;
  ok: boolean;
}
