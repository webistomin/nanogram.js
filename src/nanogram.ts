import { IUserProfileResponse } from './types/user-profile-page';
import { ITagsResponse } from './types/tags-page';
import { ILocationResponse } from './types/location-page';
import { ILocationDirectoryResponse } from './types/location-directory-page';
import { ICitiesResponse } from './types/cities-page';
import { IPlacesResponse } from './types/places-page';
import { IPlaceResponse } from './types/place-page';

export default class Nanogram {
  private readonly INSTAGRAM_HOSTNAME: URL;
  private readonly SHARED_DATA_TEG_EXP: RegExp;

  constructor() {
    this.INSTAGRAM_HOSTNAME = new URL('https://www.instagram.com/');
    this.SHARED_DATA_TEG_EXP = /^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g;
  }

  private buildUrl(query: string): RequestInfo {
    return `${this.INSTAGRAM_HOSTNAME}${query}`;
  }

  private parseJSON<T>(content: string): T {
    try {
      const parsedData = content.replace(this.SHARED_DATA_TEG_EXP, '$1');
      return JSON.parse(parsedData);
    } catch (error) {
      console.error(`Failure during parsing: ${error}`);
    }
  }

  private async HTTP<T>(request: RequestInfo): Promise<T> {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
    };

    const response = await fetch(request, requestOptions).then((response: Response) => {
      return response.text();
    });

    return this.parseJSON(response);
  }

  public async getMediaByUsername(username: string): Promise<IUserProfileResponse> {
    const url = this.buildUrl(username);
    return this.HTTP<IUserProfileResponse>(url);
  }

  public async getMediaByTag(tag: string): Promise<ITagsResponse> {
    const url = this.buildUrl(`explore/tags/${tag}`);
    return this.HTTP<ITagsResponse>(url);
  }

  public async getMediaByLocation(locationId: number, placeName: string): Promise<ILocationResponse> {
    const url = this.buildUrl(`explore/locations/${locationId}/${placeName}`);
    return this.HTTP<ILocationResponse>(url);
  }

  public async getAllLocations(): Promise<ILocationDirectoryResponse> {
    const url = this.buildUrl(`explore/locations/`);
    return this.HTTP<ILocationDirectoryResponse>(url);
  }

  public async getCitiesByCountryId(countryId: string): Promise<ICitiesResponse> {
    const url = this.buildUrl(`explore/locations/${countryId}`);
    return this.HTTP<ICitiesResponse>(url);
  }

  public async getPlacesByCityId(cityId: string): Promise<IPlacesResponse> {
    const url = this.buildUrl(`explore/locations/${cityId}`);
    return this.HTTP<IPlacesResponse>(url);
  }

  public async getMediaByPlaceId(placeId: number): Promise<IPlaceResponse> {
    const url = this.buildUrl(`explore/locations/${placeId}`);
    return this.HTTP<IPlaceResponse>(url);
  }
}
