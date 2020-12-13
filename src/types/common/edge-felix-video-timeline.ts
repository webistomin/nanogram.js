import { IThumbnail } from './thumbnail';
import { IEdgeMediaToCaption } from './edge-media-to-caption';
import { IEdgeMediaToComment } from './edge-media-to-comment';
import { IEdgeLikedBy } from './edge-liked-by';
import { IEdgeMediaPreviewLike } from './edge-media-preview-like';
import { ILocation } from './location';
import { IEdgeMediaToTaggedUser } from './edge-media-to-tagged-user';
import { ISharingFrictionInfo } from './sharing-friction-info';
import { IDashInfo } from './dash-info';
import { INodeOwner } from './node-owner';

export interface IEdgeFelixVideoTimeline {
  count: number;
  page_info: {
    has_next_page: boolean;
    end_cursor: string | null;
  };
  edges: IEdgeFelixVideoTimelineNode[];
}

export interface IEdgeFelixVideoTimelineNode {
  node: {
    __typename: string;
    id: string;
    shortcode: string;
    dimensions: {
      height: number;
      width: number;
    };
    display_url: string;
    gating_info: string | null;
    fact_check_overall_rating: string | null;
    fact_check_information: string | null;
    media_preview: string | null;
    owner: INodeOwner;
    is_video: boolean;
    accessibility_caption: string | null;
    edge_media_to_caption: IEdgeMediaToCaption;
    edge_media_to_comment: IEdgeMediaToComment;
    edge_media_to_tagged_user: IEdgeMediaToTaggedUser;
    sharing_friction_info?: ISharingFrictionInfo;
    media_overlay_info?: unknown;
    dash_info?: IDashInfo;
    has_audio?: boolean;
    tracking_token?: string;
    video_url?: string;
    comments_disabled: boolean;
    taken_at_timestamp: DOMTimeStamp;
    edge_liked_by: IEdgeLikedBy;
    edge_media_preview_like: IEdgeMediaPreviewLike;
    location: ILocation | null;
    thumbnail_src: string;
    thumbnail_resources: IThumbnail[];
    felix_profile_grid_crop: {
      crop_left: number;
      crop_right: number;
      crop_top: number;
      crop_bottom: number;
    };
    encoding_status: string | null;
    is_published: boolean;
    product_type: string;
    title: string;
    video_duration: number;
    video_view_count: number;
  };
}
