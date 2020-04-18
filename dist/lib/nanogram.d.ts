import { IUserProfileResponse } from './types/user-profile-page';
import { ITagsResponse } from './types/tags-page';
import { ILocationResponse } from './types/location-page';
import { ILocationDirectoryResponse } from './types/location-directory-page';
import { ICitiesResponse } from './types/cities-page';
import { IPlacesResponse } from './types/places-page';
import { IPlaceResponse } from './types/place-page';
import { ISearchResponse } from './types/search-page';
export default class Nanogram {
    private readonly INSTAGRAM_HOSTNAME;
    private readonly SHARED_DATA_TEG_EXP;
    constructor();
    private buildUrl;
    private parseJSON;
    private HTTP;
    getMediaByUsername(username: string): Promise<IUserProfileResponse>;
    getMediaByTag(tag: string): Promise<ITagsResponse>;
    getMediaByLocation(locationId: number, placeName: string): Promise<ILocationResponse>;
    getAllLocations(): Promise<ILocationDirectoryResponse>;
    getCitiesByCountryId(countryId: string): Promise<ICitiesResponse>;
    getPlacesByCityId(cityId: string): Promise<IPlacesResponse>;
    getMediaByPlaceId(placeId: number): Promise<IPlaceResponse>;
    getMediaBySearchQuery(query: string): Promise<ISearchResponse>;
}
