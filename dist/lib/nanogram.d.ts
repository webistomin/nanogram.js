import { IUserProfileResponse } from './types/user-profile-page';
import { ITagsResponse } from './types/tags-page';
import { ILocationResponse } from './types/location-page';
import { ILocationDirectoryResponse } from './types/location-directory-page';
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
    getCitiesByCountryId(countryId: string): Promise<ITagsResponse>;
    getPlacesByCityId(cityId: string): Promise<ITagsResponse>;
    getMediaByPlaceId(placeId: number): Promise<ITagsResponse>;
}
//# sourceMappingURL=nanogram.d.ts.map