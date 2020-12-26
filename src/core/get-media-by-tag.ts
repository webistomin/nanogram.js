import { ITagsResponse, ITagsResult } from '../types/tags-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/explore/tags/{tag}/
 *
 * @example
 * https://www.instagram.com/explore/tags/sunset/
 */
export const getMediaByTag = async (tag: string): Promise<ITagsResult> => {
  const result: ITagsResult = {
    tag: null,
  };

  const url = buildURL(`explore/tags/${tag}/`);
  const response = await HTTP<ITagsResponse>(url);
  const content = response?.entry_data?.TagPage;

  if (content) {
    const { hashtag = null } = { ...content?.[0]?.graphql };
    result.tag = hashtag;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaByTag;
