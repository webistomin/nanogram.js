import { IPostResult } from '../types/post-page';
/**
 * Get content from
 * https://www.instagram.com/p/{postId}/
 *
 * @example
 * https://www.instagram.com/p/CIrIDMtDwn4/
 */
export declare const getMediaByPostId: (postId: string) => Promise<IPostResult>;
export default getMediaByPostId;
