import { ISearchResponse, ISearchResult } from '../types/search-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

export const getMediaBySearchQuery = async (query: string): Promise<ISearchResult> => {
  const result: ISearchResult = {
    media: {
      users: null,
      hashtags: null,
      places: null,
    },
    ok: false,
  };

  const url = buildURL(`web/search/topsearch/?context=blended&query=${query}&include_reel=true`);
  const response = await HTTP<ISearchResponse>(url, false);

  if (response) {
    const { users = null, hashtags = null, places = null } = response;
    result.media.users = users;
    result.media.hashtags = hashtags;
    result.media.places = places;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaBySearchQuery;
