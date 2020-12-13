export interface IEdgeMediaToHoistedComment {
  edges?: IEdgeMediaToHoistedCommentNode[];
}

export interface IEdgeMediaToHoistedCommentNode {
  node: {
    id: string;
    text: string;
    created_at: number;
    did_report_as_spam: boolean;
    owner: {
      id: string;
      is_verified: boolean;
      profile_pic_url: string;
      username: string;
    };
    viewer_has_liked: boolean;
    edge_liked_by: {
      count: number;
    };
  };
}
