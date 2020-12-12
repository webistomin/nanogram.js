import { HTTP, buildURL } from '../utils';
import { IPlacesResponse, IPlacesResult } from '../types/places-page';

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
  const { city_info = null, country_info = null, location_list = null } = {
    ...response?.entry_data?.LocationsDirectoryPage[0],
  };

  return {
    ...result,
    ...{ place: { city_info, country_info, location_list }, ok: Boolean(city_info || country_info || location_list) },
  };
};

export default getPlacesByCityId;
