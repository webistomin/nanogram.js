import { IUserProfileResult } from '../types/user-profile-page';
/**
 * Get content from
 * https://www.instagram.com/{username}/
 *
 * @example:
 * https://www.instagram.com/instagram/
 */
export declare const getMediaByUsername: (username: string) => Promise<IUserProfileResult>;
export default getMediaByUsername;
