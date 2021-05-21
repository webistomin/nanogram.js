import { ITagsResult } from '../types/tags-page';
/**
 * Get content from
 * https://www.instagram.com/explore/tags/{tag}/
 *
 * @example
 * https://www.instagram.com/explore/tags/sunset/
 */
export declare const getMediaByTag: (tag: string) => Promise<ITagsResult>;
export default getMediaByTag;
