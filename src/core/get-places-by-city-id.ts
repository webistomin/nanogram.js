import { IPlacesResponse, IPlacesResult } from '../types/places-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{cityId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/c2728325/
 */
export const getPlacesByCityId = async (cityId: string): Promise<IPlacesResult> => {
  const result: IPlacesResult = {
    place: {
      city_info: null,
      country_info: null,
      location_list: null,
    },
    ok: false,
  };

  const url = buildURL(`explore/locations/${cityId}`);
  const response = await HTTP<IPlacesResponse>(url);
  const content = response?.entry_data?.LocationsDirectoryPage;

  if (content) {
    const { city_info = null, country_info = null, location_list = null } = { ...content?.[0] };
    result.place.city_info = city_info;
    result.place.country_info = country_info;
    result.place.location_list = location_list;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getPlacesByCityId;
