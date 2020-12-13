import { IUserProfileResponse, IUserProfileResult } from '../types/user-profile-page';
import { HTTP, buildURL, NETWORK_BAN_MESSAGE } from '../utils';

/**
 * Get content from
 * https://www.instagram.com/{username}/
 *
 * @example:
 * https://www.instagram.com/instagram/
 */
export const getMediaByUsername = async (username: string): Promise<IUserProfileResult> => {
  const result: IUserProfileResult = {
    profile: null,
  };

  const url = buildURL(`${username}/`);
  const response = await HTTP<IUserProfileResponse>(url);
  const content = response?.entry_data?.ProfilePage;

  if (content) {
    const { user = null } = { ...content?.[0]?.graphql };
    result.profile = user;
  } else {
    throw new Error(NETWORK_BAN_MESSAGE);
  }

  return result;
};

export default getMediaByUsername;
