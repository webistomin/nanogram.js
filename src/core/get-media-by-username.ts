import { IUserProfileResponse, IUserProfileResult } from '../types/user-profile-page';
import { logError, HTTP, buildURL } from '../utils';

export const getMediaByUsername = async (username: string): Promise<IUserProfileResult> => {
  const result: IUserProfileResult = {
    profile: null,
    ok: false,
  };

  if (!username) {
    logError(['username']);
    return result;
  }

  const url = buildURL(username);
  const response = await HTTP<IUserProfileResponse>(url);

  const profile = response?.entry_data?.ProfilePage[0]?.graphql?.user || null;

  return { ...result, ...{ profile, ok: Boolean(profile) } };
};

export default getMediaByUsername;
