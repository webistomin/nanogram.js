import { ICountry } from './common/country';
export interface ILocationDirectoryResponse {
    entry_data: {
        LocationsDirectoryPage: ILocationDirectory[];
    };
}
export interface ILocationDirectory {
    county_list: ICountry[];
    next_page: number;
    logging_page_id: string;
}
//# sourceMappingURL=location-directory-page.d.ts.map