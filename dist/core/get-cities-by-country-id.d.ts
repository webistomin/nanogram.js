import { ICitiesResult } from '../types/cities-page';
/**
 * Get content from
 * https://www.instagram.com/explore/locations/{countryId}/
 *
 * @example
 * https://www.instagram.com/explore/locations/US/
 */
export declare const getCitiesByCountryId: (countryId: string) => Promise<ICitiesResult>;
export default getCitiesByCountryId;
//# sourceMappingURL=get-cities-by-country-id.d.ts.map