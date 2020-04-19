import { IUserProfileResult } from './types/user-profile-page';
import { ITagsResult } from './types/tags-page';
import { ILocationResult } from './types/location-page';
import { ILocationDirectoryResult } from './types/location-directory-page';
import { ICitiesResult } from './types/cities-page';
import { IPlacesResult } from './types/places-page';
import { IPlaceResult } from './types/place-page';
import { ISearchResult } from './types/search-page';
export default class Nanogram {
    private readonly INSTAGRAM_HOSTNAME;
    private readonly SHARED_DATA_TEG_EXP;
    constructor();
    private buildUrl;
    private parseJSON;
    private HTTP;
    private static logError;
    getMediaByUsername(username: string): Promise<IUserProfileResult>;
    getMediaByTag(tag: string): Promise<ITagsResult>;
    getMediaByLocation(locationId: number, placeName: string): Promise<ILocationResult>;
    getCountries(): Promise<ILocationDirectoryResult>;
    getCitiesByCountryId(countryId: string): Promise<ICitiesResult>;
    getPlacesByCityId(cityId: string): Promise<IPlacesResult>;
    getMediaByPlaceId(placeId: number): Promise<IPlaceResult>;
    getMediaBySearchQuery(query: string): Promise<ISearchResult>;
}
