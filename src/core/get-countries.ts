import { ILocationDirectoryResponse, ILocationDirectoryResult } from '../types/location-directory-page';
import { buildURL, HTTP } from '../utils';

export const getCountries = async (): Promise<ILocationDirectoryResult> => {
  const result: ILocationDirectoryResult = {
    country_list: null,
    ok: false,
  };

  const url = buildURL(`explore/locations/`);
  const response = await HTTP<ILocationDirectoryResponse>(url);
  const countryList = response?.entry_data?.LocationsDirectoryPage[0]?.country_list || null;

  return { ...result, ...{ country_list: countryList, ok: Boolean(countryList) } };
};

export default getCountries;
