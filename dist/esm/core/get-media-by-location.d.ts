import { ILocationResult } from '../types/location-page';
/**
 * Get content from
 * https://www.instagram.com/explore/locations/{locationId}/{placeName}
 *
 * @example
 * https://www.instagram.com/explore/locations/6264386/highbridge-park
 */
export declare const getMediaByLocation: (locationId: number, placeName: string) => Promise<ILocationResult>;
export default getMediaByLocation;
