import { HTTP, buildURL } from '../utils';
import { IPostResponse, IPostResult } from '../types/post-page';

export const getMediaByPostId = async (postId: string): Promise<IPostResult> => {
  const result: IPostResult = {
    post: null,
    ok: false,
  };

  const url = buildURL(`p/${postId}`);
  const response = await HTTP<IPostResponse>(url);
  const post = response?.entry_data;

  return { ...result, ...{ post, ok: Boolean(post) } };
};

export default getMediaByPostId;
