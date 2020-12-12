import { ILocationResponse, ILocationResult } from '../types/location-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

export const getMediaByLocation = async (locationId: number, placeName: string): Promise<ILocationResult> => {
  const result: ILocationResult = {
    location: null,
    ok: false,
  };

  const url = buildURL(`explore/locations/${locationId}/${placeName}`);
  const response = await HTTP<ILocationResponse>(url);
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

export default getMediaByLocation;
