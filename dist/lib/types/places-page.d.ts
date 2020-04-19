import { ICountry } from './common/country';
import { ICity } from './common/city';
import { ILocation } from './common/location';
export interface IPlacesResponse {
    entry_data: {
        LocationsDirectoryPage: IPlacesContent[];
    };
}
export interface IPlacesContent {
    city_directory_page: boolean;
    country_info: ICountry;
    city_info: ICity;
    location_list: ILocation[];
    next_page: number;
    logging_page_id: string;
}
export interface IPlacesResult {
    place: {
        country_info: ICountry | null;
        city_info: ICity | null;
        location_list: ILocation[] | null;
    };
    ok: boolean;
}
//# sourceMappingURL=places-page.d.ts.map