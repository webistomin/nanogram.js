/* eslint-disable @typescript-eslint/camelcase */
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
  private readonly SHARED_DATA_TEG_EXP: RegExp;

  constructor() {
    this.INSTAGRAM_HOSTNAME = 'https://www.instagram.com/';
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

  public async getMediaByUsername(username: string): Promise<IUserProfileResult> {
    if (!username) {
      console.error('Nanogram: please provide a valid username');
      return {
        profile: null,
      };
    }

    const url = this.buildUrl(username);
    const response = await this.HTTP<IUserProfileResponse>(url);

    if (response) {
      return {
        profile: response?.entry_data?.ProfilePage[0]?.graphql?.user || null,
      };
    }

    return {
      profile: null,
    };
  }

  public async getMediaByTag(tag: string): Promise<ITagsResult> {
    if (!tag) {
      console.error('Nanogram: please provide a valid tag');
      return {
        tag: null,
      };
    }

    const url = this.buildUrl(`explore/tags/${tag}`);
    const response = await this.HTTP<ITagsResponse>(url);

    if (response) {
      return {
        tag: response?.entry_data?.TagPage[0]?.graphql?.hashtag || null,
      };
    }

    return {
      tag: null,
    };
  }

  public async getMediaByLocation(locationId: number, placeName: string): Promise<ILocationResult> {
    if (!locationId || !placeName) {
      console.error('Nanogram: please provide a valid location id and place name');
      return {
        location: null,
      };
    }

    const url = this.buildUrl(`explore/locations/${locationId}/${placeName}`);
    const response = await this.HTTP<ILocationResponse>(url);

    if (response) {
      return {
        location: response?.entry_data?.LocationsPage[0]?.graphql?.location || null,
      };
    }

    return {
      location: null,
    };
  }

  public async getCountries(): Promise<ILocationDirectoryResult> {
    const url = this.buildUrl(`explore/locations/`);
    const response = await this.HTTP<ILocationDirectoryResponse>(url);

    if (response) {
      return {
        country_list: response?.entry_data?.LocationsDirectoryPage[0]?.country_list || null,
      };
    }

    return {
      country_list: null,
    };
  }

  public async getCitiesByCountryId(countryId: string): Promise<ICitiesResult> {
    if (!countryId) {
      console.error('Nanogram: please provide a valid country id');
      return {
        city_list: null,
        country_info: null,
      };
    }

    const url = this.buildUrl(`explore/locations/${countryId}`);
    const response = await this.HTTP<ICitiesResponse>(url);

    if (response) {
      const { city_list, country_info } = response?.entry_data.LocationsDirectoryPage[0];

      return {
        city_list: city_list || null,
        country_info: country_info || null,
      };
    }

    return {
      city_list: null,
      country_info: null,
    };
  }

  public async getPlaceByCityId(cityId: string): Promise<IPlacesResult> {
    if (!cityId) {
      console.error('Nanogram: please provide a valid city id');
      return {
        place: {
          city_info: null,
          country_info: null,
          location_list: null,
        },
      };
    }

    const url = this.buildUrl(`explore/locations/${cityId}`);
    const response = await this.HTTP<IPlacesResponse>(url);

    if (response) {
      const { city_info, country_info, location_list } = response?.entry_data?.LocationsDirectoryPage[0];

      return {
        place: {
          city_info: city_info || null,
          country_info: country_info || null,
          location_list: location_list || null,
        },
      };
    }
    return {
      place: {
        city_info: null,
        country_info: null,
        location_list: null,
      },
    };
  }

  public async getMediaByPlaceId(placeId: number): Promise<IPlaceResult> {
    if (!placeId) {
      console.error('Nanogram: please provide a valid place id');
      return {
        location: null,
      };
    }

    const url = this.buildUrl(`explore/locations/${placeId}`);
    const response = await this.HTTP<IPlaceResponse>(url);

    if (response) {
      return {
        location: response?.entry_data?.LocationsPage[0]?.graphql.location || null,
      };
    }

    return {
      location: null,
    };
  }

  public async getMediaBySearchQuery(query: string): Promise<ISearchResult> {
    if (!query) {
      console.error('Nanogram: please provide a search query');
      return {
        users: null,
        hashtags: null,
        places: null,
      };
    }

    const url = this.buildUrl(`web/search/topsearch/?context=blended&query=${query}&include_reel=true`);
    const { users, hashtags, places } = await this.HTTP<ISearchResponse>(url);

    return {
      users: users || null,
      hashtags: hashtags || null,
      places: places || null,
    };
  }
}
