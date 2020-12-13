export interface IEdgeMediaPreviewLike {
  count: number;
  edges?: IEdgeMediaPreviewLikeNode[];
}

export interface IEdgeMediaPreviewLikeNode {
  node: {
    id: string;
    profile_pic_url: string;
    username: string;
  };
}
