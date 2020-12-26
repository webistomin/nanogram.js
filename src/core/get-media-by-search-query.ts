import { ISearchResponse, ISearchResult } from '../types/search-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/web/search/topsearch/?context=blended&query={query}&include_reel=true
 *
 * @example
 * https://www.instagram.com/web/search/topsearch/?context=blended&query=sunset&include_reel=true
 */
export const getMediaBySearchQuery = async (query: string): Promise<ISearchResult> => {
  const result: ISearchResult = {
    media: {
      users: null,
      hashtags: null,
      places: null,
    },
  };

  const url = buildURL(`web/search/topsearch/?context=blended&query=${query}&include_reel=true`);
  const response = await HTTP<ISearchResponse>(url, false);

  if (response) {
    const { users = null, hashtags = null, places = null } = response;
    result.media.users = users;
    result.media.hashtags = hashtags;
    result.media.places = places;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaBySearchQuery;
