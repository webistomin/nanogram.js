import { ILocation } from './common/location';

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
  sensitivity_friction_info: boolean;
  sharing_friction_info: {
    should_have_sharing_friction: boolean;
    bloks_app_url: string | null;
  };
  media_overlay_info: unknown;
  fact_check_information?: unknown;
  fact_check_overall_rating?: unknown;
  media_preview: string | null;
  display_url: string;
  display_resources: IPostDisplayResources[];
  accessibility_caption?: string;
  is_video: boolean;
  should_log_client_event?: boolean;
  tracking_token: string;
  edge_media_to_tagged_user?: IPostEdgeToTaggedUser;
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
  location: ILocation | null;
  viewer_has_liked: boolean;
  viewer_has_saved: boolean;
  viewer_has_saved_to_collection: boolean;
  viewer_in_photo_of_you: boolean;
  viewer_can_reshare: boolean;
  owner: IPostShortcodeMediaOwner;
  is_ad: boolean;
  edge_web_media_to_related_media: IPostEdgeMediaToCaption;
  edge_sidecar_to_children?: IPostEdgeSidecarToChildren;
  edge_related_profiles: IPostEdgeRelatedProfiles;
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

export interface IPostDisplayResources {
  src: string;
  config_width: number;
  config_height: number;
}

export interface IPostEdgeMediaPreviewLike {
  count: number;
  edges?: Array<{
    node: {
      id: string;
      profile_pic_url: string;
      username: string;
    };
  }>;
}

export interface IPostEdgeMediaToCaption {
  edges: Array<{
    node: {
      text: string;
    };
  }>;
}

export interface IPostEdgeMediaToHoistedComment {
  edges: Array<{
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
  }>;
}

export interface IPostEdgeMediaToParentComment {
  count: number;
  page_info: unknown;
  edges: unknown;
}

export interface IPostEdgeMediaToComment {
  count: number;
  edges?: Array<{
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
  is_restricted_pending: boolean;
}

export interface IPostCommentNodeOwner {
  id: string;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
  full_name?: string;
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
  restricted_by_viewer: boolean;
  pass_tiering_recommendation: boolean;
  edge_owner_to_timeline_media: {
    count: number;
  };
  edge_followed_by: {
    count: number;
  };
}

export interface IPostDashInfo {
  is_dash_eligible: boolean;
  video_dash_manifest: unknown;
  number_of_qualities: number;
}

export interface IPostEdgeSidecarToChildren {
  edges: Array<{
    node: {
      __typename: string;
      id: string;
      shortcode?: string;
      dimensions: IPostDimensions;
      gating_info?: unknown;
      fact_check_overall_rating?: unknown;
      fact_check_information?: unknown;
      sensitivity_friction_info?: unknown;
      sharing_friction_info?: {
        should_have_sharing_friction: boolean;
        bloks_app_url: string | null;
      };
      media_overlay_info?: unknown;
      media_preview?: string | null;
      display_url: string;
      display_resources: IPostDisplayResources[];
      accessibility_caption?: string | null;
      is_video: boolean;
      video_url?: string;
      tracking_token: string;
      edge_media_to_tagged_user: IPostEdgeToTaggedUser;
    };
  }>;
}

export interface IPostEdgeRelatedProfiles {
  edges: Array<{
    node: unknown;
  }>;
}

export interface IPostEdgeToTaggedUser {
  edges: Array<{
    node: {
      user: IPostCommentNodeOwner;
      x: number;
      y: number;
    };
  }>;
}

export interface IPostResult {
  post: IPostContent['graphql']['shortcode_media'];
  ok: boolean;
}
