import { ICitiesResponse, ICitiesResult } from '../types/cities-page';
import { logError, HTTP, buildURL } from '../utils';

export const getCitiesByCountryId = async (countryId: string): Promise<ICitiesResult> => {
  const result: ICitiesResult = {
    city_list: null,
    country_info: null,
    ok: false,
  };

  if (!countryId) {
    logError(['country id']);
    return result;
  }

  const url = buildURL(`explore/locations/${countryId}`);
  const response = await HTTP<ICitiesResponse>(url);
  const { city_list = null, country_info = null } = { ...response?.entry_data?.LocationsDirectoryPage[0] };

  return { ...result, ...{ country_info, city_list, ok: Boolean(country_info || city_list) } };
};

export default getCitiesByCountryId;
