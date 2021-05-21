import { IPlaceResult } from '../types/place-page';
/**
 * Get content from
 * https://www.instagram.com/explore/locations/{placeId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/2999512/
 */
export declare const getMediaByPlaceId: (placeId: number) => Promise<IPlaceResult>;
export default getMediaByPlaceId;
//# sourceMappingURL=get-media-by-place-id.d.ts.map