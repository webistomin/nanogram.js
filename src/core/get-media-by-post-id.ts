import { IPostResponse, IPostResult } from '../types/post-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/p/{postId}/
 *
 * @example
 * https://www.instagram.com/p/CIrIDMtDwn4/
 */
export const getMediaByPostId = async (postId: string): Promise<IPostResult> => {
  const result: IPostResult = {
    post: null,
    ok: false,
  };

  const url = buildURL(`p/${postId}`);
  const response = await HTTP<IPostResponse>(url);
  const content = response?.entry_data?.PostPage;

  if (content) {
    const { shortcode_media = null } = { ...content?.[0]?.graphql };
    result.post = shortcode_media;
    result.ok = true;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaByPostId;
