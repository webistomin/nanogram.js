import { ILocationResponse, ILocationResult } from '../types/location-page';
import { HTTP, buildURL } from '../utils';

export const getMediaByLocation = async (locationId: number, placeName: string): Promise<ILocationResult> => {
  const result: ILocationResult = {
    location: null,
    ok: false,
  };

  const url = buildURL(`explore/locations/${locationId}/${placeName}`);
  const response = await HTTP<ILocationResponse>(url);
  const location = response?.entry_data?.LocationsPage[0]?.graphql?.location || null;

  return { ...result, ...{ location, ok: Boolean(location) } };
};

export default getMediaByLocation;
