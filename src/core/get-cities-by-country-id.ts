import { ICitiesResponse, ICitiesResult } from '../types/cities-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

export const getCitiesByCountryId = async (countryId: string): Promise<ICitiesResult> => {
  const result: ICitiesResult = {
    city_list: null,
    country_info: null,
    ok: false,
  };

  const url = buildURL(`explore/locations/${countryId}`);
  const response = await HTTP<ICitiesResponse>(url);
  const content = response?.entry_data?.LocationsDirectoryPage;

  if (content) {
    const { city_list = null, country_info = null } = { ...content?.[0] };
    result.city_list = city_list;
    result.country_info = country_info;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getCitiesByCountryId;
