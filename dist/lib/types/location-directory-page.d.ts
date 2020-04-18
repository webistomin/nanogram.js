import { ICountry } from './common/country';
export interface ILocationDirectoryResponse {
    entry_data: {
        LocationsDirectoryPage: ILocationDirectoryContent[];
    };
}
export interface ILocationDirectoryContent {
    country_list: ICountry[];
    next_page: number;
    logging_page_id: string;
}
//# sourceMappingURL=location-directory-page.d.ts.map