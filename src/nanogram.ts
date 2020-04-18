import { IUserProfileResponse } from './types/user-profile-page';
import { ITagsResponse } from './types/tags-page';
import { ILocationResponse } from './types/location-page';
import { ILocationDirectoryResponse } from './types/location-directory-page';
import { ICitiesResponse } from './types/cities-page';
import { IPlacesResponse } from './types/places-page';
import { IPlaceResponse } from './types/place-page';
import { ISearchResponse } from './types/search-page';

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
      console.error(`Nanogram: failure during parsing JSON.\nError message: ${error.message}`);
    }
  }

  private async HTTP<T>(request: RequestInfo): Promise<T | undefined> {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
    };

    const response = await fetch(request, requestOptions).then((response: Response) => {
      if (response.ok) {
        return response.text();
      } else {
        console.error(
          'Nanogram: error during request.\nProbably making too many requests to the Instagram application.\nAlso check method parameters.'
        );
      }
    });

    if (response) {
      return this.parseJSON(response);
    }
  }

  public async getMediaByUsername(username: string): Promise<IUserProfileResponse | undefined> {
    if (!username) {
      console.error('Nanogram: please provide a valid username');
      return;
    }

    const url = this.buildUrl(username);
    const response = await this.HTTP<IUserProfileResponse>(url);
    return response;
  }

  public async getMediaByTag(tag: string): Promise<ITagsResponse | undefined> {
    if (!tag) {
      console.error('Nanogram: please provide a valid tag');
      return;
    }

    const url = this.buildUrl(`explore/tags/${tag}`);
    const response = await this.HTTP<ITagsResponse>(url);
    return response;
  }

  public async getMediaByLocation(locationId: number, placeName: string): Promise<ILocationResponse | undefined> {
    if (!locationId || !placeName) {
      console.error('Nanogram: please provide a valid location id and place name');
      return;
    }

    const url = this.buildUrl(`explore/locations/${locationId}/${placeName}`);
    const response = await this.HTTP<ILocationResponse>(url);
    return response;
  }

  public async getAllLocations(): Promise<ILocationDirectoryResponse | undefined> {
    const url = this.buildUrl(`explore/locations/`);
    const response = await this.HTTP<ILocationDirectoryResponse>(url);
    return response;
  }

  public async getCitiesByCountryId(countryId: string): Promise<ICitiesResponse | undefined> {
    if (!countryId) {
      console.error('Nanogram: please provide a valid country id');
      return;
    }

    const url = this.buildUrl(`explore/locations/${countryId}`);
    const response = await this.HTTP<ICitiesResponse>(url);
    return response;
  }

  public async getPlacesByCityId(cityId: string): Promise<IPlacesResponse | undefined> {
    if (!cityId) {
      console.error('Nanogram: please provide a valid city id');
      return;
    }

    const url = this.buildUrl(`explore/locations/${cityId}`);
    const response = await this.HTTP<IPlacesResponse>(url);
    return response;
  }

  public async getMediaByPlaceId(placeId: number): Promise<IPlaceResponse | undefined> {
    if (!placeId) {
      console.error('Nanogram: please provide a valid place id');
      return;
    }

    const url = this.buildUrl(`explore/locations/${placeId}`);
    const response = await this.HTTP<IPlaceResponse>(url);
    return response;
  }

  public async getMediaBySearchQuery(query: string): Promise<ISearchResponse | undefined> {
    if (!query) {
      console.error('Nanogram: please provide a search query');
      return;
    }

    const url = this.buildUrl(`web/search/topsearch/?context=blended&query=${query}&include_reel=true`);
    const response = await this.HTTP<ISearchResponse>(url);
    return response;
  }
}
