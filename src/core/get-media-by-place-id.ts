import { IPlaceResponse, IPlaceResult } from '../types/place-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/explore/locations/{placeId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/2999512/
 */
export const getMediaByPlaceId = async (placeId: number): Promise<IPlaceResult> => {
  const result: IPlaceResult = {
    location: null,
    ok: false,
  };

  const url = buildURL(`explore/locations/${placeId}`);
  const response = await HTTP<IPlaceResponse>(url);
  const content = response?.entry_data?.LocationsPage;

  if (content) {
    const { location = null } = { ...content?.[0]?.graphql };
    result.location = location;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaByPlaceId;
