import { IPlacesResult } from '../types/places-page';
/**
 * Get content from
 * https://www.instagram.com/explore/locations/{cityId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/c2728325/
 */
export declare const getPlacesByCityId: (cityId: string) => Promise<IPlacesResult>;
export default getPlacesByCityId;
//# sourceMappingURL=get-places-by-city-id.d.ts.map