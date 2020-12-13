import { ILocationDirectoryResponse, ILocationDirectoryResult } from '../types/location-directory-page';
import { buildURL, HTTP, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/explore/locations/
 *
 * @example
 * https://www.instagram.com/explore/locations/
 */
export const getCountries = async (): Promise<ILocationDirectoryResult> => {
  const result: ILocationDirectoryResult = {
    country_list: null,
    ok: false,
  };

  const url = buildURL(`explore/locations/`);
  const response = await HTTP<ILocationDirectoryResponse>(url);
  const content = response?.entry_data?.LocationsDirectoryPage;

  if (content) {
    const { country_list = null } = { ...content?.[0] };
    result.country_list = country_list;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getCountries;
