import { HTTP, buildURL } from '../utils';
import { ITagsResponse, ITagsResult } from '../types/tags-page';

export const getMediaByTag = async (tag: string): Promise<ITagsResult> => {
  const result: ITagsResult = {
    tag: null,
    ok: false,
  };

  const url = buildURL(`explore/tags/${tag}`);
  const response = await HTTP<ITagsResponse>(url);
  const hashtag = response?.entry_data?.TagPage[0]?.graphql.hashtag || null;

  return { ...result, ...{ tag: hashtag, ok: Boolean(hashtag) } };
};

export default getMediaByTag;
