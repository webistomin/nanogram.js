import { IPlaceResponse, IPlaceResult } from '../types/place-page';
import { logError, HTTP, buildURL } from '../utils';

export const getMediaByPlaceId = async (placeId: number): Promise<IPlaceResult> => {
  const result: IPlaceResult = {
    location: null,
    ok: false,
  };

  if (!placeId) {
    logError(['place id']);
    return result;
  }

  const url = buildURL(`explore/locations/${placeId}`);
  const response = await HTTP<IPlaceResponse>(url);
  const location = response?.entry_data?.LocationsPage[0]?.graphql.location || null;

  return { ...result, ...{ location, ok: Boolean(location) } };
};

export default getMediaByPlaceId;
