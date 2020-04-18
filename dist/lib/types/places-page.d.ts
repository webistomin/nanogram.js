import { ICountry } from './common/country';
import { ICity } from './common/city';
import { ILocation } from './common/location';
export interface IPlacesResponse {
    LocationsDirectoryPage: IPlacesContent[];
}
export interface IPlacesContent {
    city_directory_page: boolean;
    country_info: ICountry;
    city_info: ICity;
    location_list: ILocation[];
    next_page: number;
    logging_page_id: string;
}
//# sourceMappingURL=places-page.d.ts.map