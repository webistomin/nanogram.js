import { ILocation } from './common/location';
import { IEdgeMediaToTaggedUser } from './common/edge-media-to-tagged-user';
import { IThumbnail } from './common/thumbnail';
import { ISharingFrictionInfo } from './common/sharing-friction-info';
import { IEdgeMediaToCaption } from './common/edge-media-to-caption';
import { IDashInfo } from './common/dash-info';
import { IEdgeSidecarToChildren } from './common/edge-sidecar-to-children';
import { IDimensions } from './common/dimensions';
import { IEdgeMediaPreviewLike } from './common/edge-media-preview-like';
import { IEdgeMediaToHoistedComment } from './common/edge-media-to-hoisted-comment';
import { IGatingInfo } from './common/gating-info';
import { IEdgeMediaToParentComment } from './common/edge-media-to-parent-comment';
import { IEdgeMediaToComment } from './common/edge-media-to-comment';
import { IEdgeRelatedProfiles } from './common/edge-related-profiles';
import { IEdgeFollowedBy } from './common/edge-followed-by';

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
  edge_media_to_comment?: IEdgeMediaToComment;
  thumbnail_src?: string;
  dimensions: IDimensions;
  gating_info?: IGatingInfo | null;
  sensitivity_friction_info: boolean;
  sharing_friction_info: ISharingFrictionInfo;
  media_overlay_info: unknown;
  fact_check_information?: unknown;
  fact_check_overall_rating?: unknown;
  media_preview: string | null;
  display_url: string;
  display_resources: IThumbnail[];
  accessibility_caption?: string;
  is_video: boolean;
  should_log_client_event?: boolean;
  tracking_token: string;
  edge_media_to_tagged_user?: IEdgeMediaToTaggedUser;
  edge_media_to_caption: IEdgeMediaToCaption;
  caption_is_edited: boolean;
  has_ranked_comments: boolean;
  edge_media_to_parent_comment?: IEdgeMediaToParentComment;
  edge_media_to_hoisted_comment?: IEdgeMediaToHoistedComment;
  edge_media_preview_comment?: IEdgeMediaToComment;
  comments_disabled: boolean;
  commenting_disabled_for_viewer: boolean;
  taken_at_timestamp: number;
  edge_media_preview_like: IEdgeMediaPreviewLike;
  edge_media_to_sponsor_user: IEdgeMediaToCaption;
  location: ILocation | null;
  viewer_has_liked: boolean;
  viewer_has_saved: boolean;
  viewer_has_saved_to_collection: boolean;
  viewer_in_photo_of_you: boolean;
  viewer_can_reshare: boolean;
  owner: IPostShortcodeMediaOwner;
  is_ad: boolean;
  edge_web_media_to_related_media: IEdgeMediaToCaption;
  edge_sidecar_to_children?: IEdgeSidecarToChildren;
  edge_related_profiles?: IEdgeRelatedProfiles;
  dash_info?: IDashInfo;
  video_url?: string;
  video_view_count?: number;
  encoding_status?: string | null;
  is_published?: boolean;
  product_type?: string;
  title?: string | null;
  video_duration?: number;
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
  edge_followed_by: IEdgeFollowedBy;
}

export interface IPostResult {
  post: IPostContent['graphql']['shortcode_media'];
  ok: boolean;
}
