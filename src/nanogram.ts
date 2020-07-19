import { IUserProfileResponse, IUserProfileResult } from './types/user-profile-page';
import { ITagsResponse, ITagsResult } from './types/tags-page';
import { ILocationResponse, ILocationResult } from './types/location-page';
import { ILocationDirectoryResponse, ILocationDirectoryResult } from './types/location-directory-page';
import { ICitiesResponse, ICitiesResult } from './types/cities-page';
import { IPlacesResponse, IPlacesResult } from './types/places-page';
import { IPlaceResponse, IPlaceResult } from './types/place-page';
import { ISearchResponse, ISearchResult } from './types/search-page';

export default class Nanogram {
  private readonly INSTAGRAM_HOSTNAME: string;
  private readonly SHARED_DATA_TAG_EXP: RegExp;

  constructor() {
    /*
     * Instagram base url
     */
    this.INSTAGRAM_HOSTNAME = 'https://www.instagram.com/';
    /*
     * Instagram RegExp to parse <script type="text/javascript">window._sharedData = {...}</script>
     */
    this.SHARED_DATA_TAG_EXP = /^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g;
  }

  /*
   * Add query to instagram base url
   */
  private buildUrl(query: string): string {
    return `${this.INSTAGRAM_HOSTNAME}${query}`;
  }

  /*
   * Get javascript object from response
   */
  private parseJSON<T>(content: string, useRegExp: boolean): T {
    try {
      let data = content;

      if (useRegExp) {
        data = content.replace(this.SHARED_DATA_TAG_EXP, '$1');
      }

      return JSON.parse(data);
    } catch (error) {
      console.error(`Nanogram: failure during parsing JSON.\nError message: ${error.message}`);
    }
  }

  /*
   * Make fetch call to instagram
   */
  private async HTTP<T>(request: RequestInfo, useRegExp = true): Promise<T | undefined> {
    if (typeof request === 'object') {
      throw new Error('Not implemented');
    }

    const xhrrequest = (method: string, url: string): Promise<XMLHttpRequest> => {
      return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = (): void => resolve(xhr);
        xhr.onerror = reject;
        xhr.send();
      });
    };

    // redirect: 'follow',
    const response = await xhrrequest('GET', request).then((response: XMLHttpRequest) => {
      if (response.status >= 200 && response.status < 400) {
        return response.responseText;
      } else {
        console.error(
          'Nanogram: error during request.\nProbably making too many requests to the Instagram application.\nAlso check method parameters.'
        );
      }
    });

    if (response) {
      return this.parseJSON(response, useRegExp);
    }

    return;
  }

  /*
   * Build error string from arguments
   */
  private static logError(params: string[]): void {
    const message = `Nanogram: please provide a valid ${params.join(' and ')}`;
    console.error(message);
  }

  /*
   * Get content from
   * https://www.instagram.com/{username}/
   *
   * Example:
   * https://www.instagram.com/instagram/
   */
  public async getMediaByUsername(username: string): Promise<IUserProfileResult> {
    const result: IUserProfileResult = {
      profile: null,
      ok: false,
    };

    if (!username) {
      Nanogram.logError(['username']);
      return result;
    }

    const url = this.buildUrl(username);
    const response = await this.HTTP<IUserProfileResponse>(url);

    const profile = response?.entry_data?.ProfilePage[0]?.graphql?.user || null;

    return { ...result, ...{ profile, ok: Boolean(profile) } };
  }

  /*
   * Get content from
   * https://www.instagram.com/explore/tags/{tag}/
   *
   * Example:
   * https://www.instagram.com/explore/tags/sunset/
   */
  public async getMediaByTag(tag: string): Promise<ITagsResult> {
    const result: ITagsResult = {
      tag: null,
      ok: false,
    };

    if (!tag) {
      Nanogram.logError(['tag']);
      return result;
    }

    const url = this.buildUrl(`explore/tags/${tag}`);
    const response = await this.HTTP<ITagsResponse>(url);
    const hashtag = response?.entry_data?.TagPage[0]?.graphql.hashtag || null;

    return { ...result, ...{ tag: hashtag, ok: Boolean(hashtag) } };
  }

  /*
   * Get content from
   * https://www.instagram.com/explore/locations/{locationId}/{placeName}
   *
   * Example:
   * https://www.instagram.com/explore/locations/6264386/highbridge-park
   */
  public async getMediaByLocation(locationId: number, placeName: string): Promise<ILocationResult> {
    const result: ILocationResult = {
      location: null,
      ok: false,
    };

    if (locationId === undefined || !placeName) {
      Nanogram.logError(['location id', 'place name']);
      return result;
    }

    const url = this.buildUrl(`explore/locations/${locationId}/${placeName}`);
    const response = await this.HTTP<ILocationResponse>(url);
    const location = response?.entry_data?.LocationsPage[0]?.graphql?.location || null;

    return { ...result, ...{ location, ok: Boolean(location) } };
  }

  /*
   * Get content from
   * https://www.instagram.com/explore/locations/
   *
   * Example:
   * https://www.instagram.com/explore/locations/
   */
  public async getCountries(): Promise<ILocationDirectoryResult> {
    const result: ILocationDirectoryResult = {
      country_list: null,
      ok: false,
    };

    const url = this.buildUrl(`explore/locations/`);
    const response = await this.HTTP<ILocationDirectoryResponse>(url);
    const countryList = response?.entry_data?.LocationsDirectoryPage[0]?.country_list || null;

    return { ...result, ...{ country_list: countryList, ok: Boolean(countryList) } };
  }

  /*
   * Get content from
   * https://www.instagram.com/explore/locations/{countryId}/
   *
   * Example:
   * https://www.instagram.com/explore/locations/US/
   */
  public async getCitiesByCountryId(countryId: string): Promise<ICitiesResult> {
    const result: ICitiesResult = {
      city_list: null,
      country_info: null,
      ok: false,
    };

    if (!countryId) {
      Nanogram.logError(['country id']);
      return result;
    }

    const url = this.buildUrl(`explore/locations/${countryId}`);
    const response = await this.HTTP<ICitiesResponse>(url);
    const { city_list = null, country_info = null } = { ...response?.entry_data?.LocationsDirectoryPage[0] };

    return { ...result, ...{ country_info, city_list, ok: Boolean(country_info || city_list) } };
  }

  /*
   * Get content from
   * https://www.instagram.com/explore/locations/{cityId}/
   *
   * Example:
   * https://www.instagram.com/explore/locations/c2728325/
   */
  public async getPlacesByCityId(cityId: string): Promise<IPlacesResult> {
    const result: IPlacesResult = {
      place: {
        city_info: null,
        country_info: null,
        location_list: null,
      },
      ok: false,
    };

    if (!cityId) {
      Nanogram.logError(['city id']);
      return result;
    }

    const url = this.buildUrl(`explore/locations/${cityId}`);
    const response = await this.HTTP<IPlacesResponse>(url);
    const { city_info = null, country_info = null, location_list = null } = {
      ...response?.entry_data?.LocationsDirectoryPage[0],
    };

    return {
      ...result,
      ...{ place: { city_info, country_info, location_list }, ok: Boolean(city_info || country_info || location_list) },
    };
  }

  /*
   * Get content from
   * https://www.instagram.com/explore/locations/{placeId}/
   *
   * Example:
   * https://www.instagram.com/explore/locations/2999512/
   */
  public async getMediaByPlaceId(placeId: number): Promise<IPlaceResult> {
    const result: IPlaceResult = {
      location: null,
      ok: false,
    };

    if (!placeId) {
      Nanogram.logError(['place id']);
      return result;
    }

    const url = this.buildUrl(`explore/locations/${placeId}`);
    const response = await this.HTTP<IPlaceResponse>(url);
    const location = response?.entry_data?.LocationsPage[0]?.graphql.location || null;

    return { ...result, ...{ location, ok: Boolean(location) } };
  }

  /*
   * Get content from
   * https://www.instagram.com/web/search/topsearch/?context=blended&query={query}&include_reel=true
   *
   * Example:
   * https://www.instagram.com/web/search/topsearch/?context=blended&query=sunset&include_reel=true
   */
  public async getMediaBySearchQuery(query: string): Promise<ISearchResult> {
    const result: ISearchResult = {
      media: {
        users: null,
        hashtags: null,
        places: null,
      },
      ok: false,
    };

    if (!query) {
      Nanogram.logError(['search query']);
      return result;
    }

    const url = this.buildUrl(`web/search/topsearch/?context=blended&query=${query}&include_reel=true`);
    const { users = null, hashtags = null, places = null } = await this.HTTP<ISearchResponse>(url, false);

    return { ...result, ...{ media: { users, hashtags, places }, ok: Boolean(users || hashtags || places) } };
  }
}
