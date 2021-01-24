/* eslint-disable */
import { IReelResponse, IReelResult } from '../types/reel-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/reel/{reelId}/
 *
 * @example
 * https://www.instagram.com/reel/CKONdDkJaPU/
 */
export const getMediaByReelId = async (reelId: string): Promise<IReelResult> => {
  const result: IReelResult = {
    reel: null,
  };

  const url = buildURL(`reel/${reelId}/`);
  const response = await HTTP<IReelResponse>(url);
  const content = response?.entry_data?.PostPage;

  if (content) {
    const { shortcode_media = null } = { ...content?.[0]?.graphql };
    result.reel = shortcode_media;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaByReelId;
