import { ITagsResponse, ITagsResult } from '../types/tags-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

export const getMediaByTag = async (tag: string): Promise<ITagsResult> => {
  const result: ITagsResult = {
    tag: null,
    ok: false,
  };

  const url = buildURL(`explore/tags/${tag}`);
  const response = await HTTP<ITagsResponse>(url);
  const content = response?.entry_data?.TagPage;

  if (content) {
    const { hashtag = null } = { ...content?.[0]?.graphql };
    result.tag = hashtag;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaByTag;
