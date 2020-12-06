export interface IPostResponse {
  entry_data: {
    PostPage: IPostContent[];
  };
}

export interface IPostContent {
  // eslint-disable-next-line @typescript-eslint/ban-types
  graphql: object;
}

export interface IPostResult {
  // eslint-disable-next-line @typescript-eslint/ban-types
  post: object;
  ok: boolean;
}
