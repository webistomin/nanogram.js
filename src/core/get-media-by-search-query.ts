import { ISearchResponse, ISearchResult } from '../types/search-page';
import { logError, HTTP, buildURL } from '../utils';

export const getMediaBySearchQuery = async (query: string): Promise<ISearchResult> => {
  const result: ISearchResult = {
    media: {
      users: null,
      hashtags: null,
      places: null,
    },
    ok: false,
  };

  if (!query) {
    logError(['search query']);
    return result;
  }

  const url = buildURL(`web/search/topsearch/?context=blended&query=${query}&include_reel=true`);
  const { users = null, hashtags = null, places = null } = await HTTP<ISearchResponse>(url, false);

  return { ...result, ...{ media: { users, hashtags, places }, ok: Boolean(users || hashtags || places) } };
};

export default getMediaBySearchQuery;
