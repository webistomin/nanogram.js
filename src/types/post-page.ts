export interface IPostResponse {
  entry_data: {
    PostPage: IPostContent[];
  };
}

export interface IPostContent {
  graphql: {
    shortcode_media: IPostContentShortcodeMedia;
  };
}

export interface IPostContentShortcodeMedia {
  __typename: string;
  id: string;
  shortcode: string;
  edge_media_to_comment?: IPostEdgeMediaToComment;
  thumbnail_src?: string;
  dimensions: IPostDimensions;
  gating_info?: IPostGatingInfo | null;
  fact_check_information?: any;
  fact_check_overall_rating?: any;
  media_preview: string | null;
  display_url: string;
  display_resources: IPostDisplayResources[];
  accessibility_caption?: string;
  is_video: boolean;
  should_log_client_event?: boolean;
  tracking_token: string;
  edge_media_to_tagged_user?: IPostEdgeMediaToCaption;
  edge_media_to_caption: IPostEdgeMediaToCaption;
  caption_is_edited: boolean;
  has_ranked_comments: boolean;
  edge_media_to_parent_comment?: IPostEdgeMediaToParentComment;
  edge_media_to_hoisted_comment?: IPostEdgeMediaToHoistedComment;
  edge_media_preview_comment?: IPostEdgeMediaToComment;
  comments_disabled: boolean;
  commenting_disabled_for_viewer: boolean;
  taken_at_timestamp: number;
  edge_media_preview_like: IPostEdgeMediaPreviewLike;
  edge_media_to_sponsor_user: IPostEdgeMediaToCaption;
  location: string | null;
  viewer_has_liked: boolean;
  viewer_has_saved: boolean;
  viewer_has_saved_to_collection: boolean;
  viewer_in_photo_of_you: boolean;
  viewer_can_reshare: boolean;
  owner: IPostShortcodeMediaOwner;
  is_ad: boolean;
  edge_web_media_to_related_media: IPostEdgeMediaToCaption;
  edge_sidecar_to_children?: IPostEdgeSidecarToChildren;
  dash_info?: IPostDashInfo;
  video_url?: string;
  video_view_count?: number;
  encoding_status?: string | null;
  is_published?: boolean;
  product_type?: string;
  title?: string | null;
  video_duration?: number;
}

export interface IPostDimensions {
  height: number;
  width: number;
}

export interface IPostGatingInfo {
  buttons: string[];
  description: string;
  gating_type: string;
  title: string;
}

export interface IPostEdgeMediaToComment {
  count: number;
}

export interface IPostDisplayResources {
  src: string;
  config_width: number;
  config_height: number;
}

export interface IPostEdgeMediaPreviewLike {
  node: {
    id: string;
    profile_pic_url: string;
    username: string;
  };
}

export interface IPostEdgeMediaToCaption {
  edges: Array<{
    node: {
      text: string;
    };
  }>;
}

export interface IPostEdgeMediaToHoistedComment {
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

export interface IPostEdgeMediaToParentComment {
  count: number;
  page_info: any;
  edges: any;
}

export interface IPostEdgeMediaToComment {
  count: number;
  edges: Array<{
    node: IPostCommentNode;
  }>;
}

export interface IPostCommentNode {
  id: string;
  text: string;
  created_at: number;
  did_report_as_spam: boolean;
  owner: IPostCommentNodeOwner;
  viewer_has_liked: boolean;
  edge_liked_by: IPostEdgeMediaToComment;
}

export interface IPostCommentNodeOwner {
  id: string;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
}

export interface IPostShortcodeMediaOwner {
  id: string;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
  blocked_by_viewer: boolean;
  followed_by_viewer: boolean;
  full_name: string;
  has_blocked_viewer: boolean;
  is_private: boolean;
  is_unpublished: boolean;
  requested_by_viewer: boolean;
}

export interface IPostDashInfo {
  is_dash_eligible: boolean;
  video_dash_manifest: any;
  number_of_qualities: number;
}

export interface IPostEdgeSidecarToChildren {
  edges: Array<{
    node: {
      __typename: string;
      id: string;
      shortcode?: string;
      dimensions: IPostDimensions;
      gating_info?: any;
      fact_check_information?: any;
      media_preview?: string | null;
      display_url: string;
      display_resources: IPostDisplayResources[];
      accessibility_caption?: string | null;
      is_video: boolean;
      video_url?: string;
      tracking_token: string;
      edge_media_to_tagged_user: IPostEdgeMediaToCaption;
    };
  }>;
}

export interface IPostResult {
  post: IPostContent['graphql']['shortcode_media'];
  ok: boolean;
}
