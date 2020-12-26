import { IEdgeFollowedBy } from './common/edge-followed-by';
import { IEdgeFollow } from './common/edge-follow';
import { IEdgeMutualFollowedBy } from './common/edge-mutual-followed-by';
import { IEdgeOwnerToTimelineMedia } from './common/edge-owner-to-timeline-media';
import { IEdgeSavedMedia } from './common/edge-saved-media';
import { IEdgeMediaCollections } from './common/edge-media-collections';
import { IEdgeFelixVideoTimeline } from './common/edge-felix-video-timeline';
import { IEdgeRelatedProfiles } from './common/edge-related-profiles';

export interface IUserProfileResponse {
  entry_data: {
    ProfilePage: IUserProfileContent[];
  };
}

export interface IUserProfileContent {
  logging_page_id: string;
  show_suggested_profiles: boolean;
  show_follow_dialog: boolean;
  graphql: {
    user: {
      fbid?: string;
      has_clips?: boolean;
      has_guides?: boolean;
      biography: string;
      category_enum?: unknown;
      category_name?: unknown;
      blocked_by_viewer: boolean;
      restricted_by_viewer: null;
      country_block: boolean;
      external_url: string;
      external_url_linkshimmed: string;
      edge_followed_by: IEdgeFollowedBy;
      followed_by_viewer: boolean;
      edge_follow: IEdgeFollow;
      follows_viewer: boolean;
      full_name: string;
      id: string;
      is_business_account: boolean;
      is_joined_recently: boolean;
      business_category_name: string;
      category_id: string;
      overall_category_name: string | null;
      is_private: boolean;
      is_verified: boolean;
      edge_mutual_followed_by: IEdgeMutualFollowedBy;
      edge_related_profiles: IEdgeRelatedProfiles;
      profile_pic_url: string;
      profile_pic_url_hd: string;
      requested_by_viewer: boolean;
      username: string;
      connected_fb_page: URL | null;
      edge_owner_to_timeline_media: IEdgeOwnerToTimelineMedia;
      edge_saved_media?: IEdgeSavedMedia;
      edge_media_collections?: IEdgeMediaCollections;
      has_ar_effects?: boolean;
      has_channel?: boolean;
      has_blocked_viewer?: boolean;
      highlight_reel_count?: number;
      has_requested_viewer?: boolean;
      edge_felix_video_timeline?: IEdgeFelixVideoTimeline;
    };
  };
  toast_content_on_load: null;
}

export interface IUserProfileResult {
  profile: IUserProfileContent['graphql']['user'] | null;
}
