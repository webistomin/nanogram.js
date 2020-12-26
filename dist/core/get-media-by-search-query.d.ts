import { ISearchResult } from '../types/search-page';
/**
 * Get content from
 * https://www.instagram.com/web/search/topsearch/?context=blended&query={query}&include_reel=true
 *
 * @example
 * https://www.instagram.com/web/search/topsearch/?context=blended&query=sunset&include_reel=true
 */
export declare const getMediaBySearchQuery: (query: string) => Promise<ISearchResult>;
export default getMediaBySearchQuery;
//# sourceMappingURL=get-media-by-search-query.d.ts.map