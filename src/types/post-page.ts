export interface IPostResponse {
  entry_data: {
    PostPage: IPostContent[];
  };
}

export interface IPostContent {
  graphql: {
    shortcode_media: {
      accessibility_caption: string;
      caption_is_edited: boolean;
      commenting_disabled_for_viewer: boolean;
      comments_disabled: boolean;
      dimensions: {
        height: number;
        width: number;
      };
      display_resources: [];
      display_url: string;
      edge_media_preview_comment: {
        count: number;
        edges: IPostEdgeMediaPreviewComment[];
      };
      edge_media_preview_like: {
        count: number;
        edges: IPostEdgeMediaPreviewLike[];
      };
      edge_media_to_caption: {
        edges: IPostEdgeMediaToCaption[];
      };
      edge_media_to_hoisted_comment: {
        edges: IPostEdgeMediaToHoistedComment[];
      };
      edge_media_to_parent_comment: IPostEdgeMediaToParentComment;
      edge_media_to_sponsor_user: {
        edges: any;
      };
      edge_media_to_tagged_user: {
        edges: any;
      };
      edge_related_profiles: {
        edges: any;
      };
      edge_web_media_to_related_media: {
        edges: any;
      };
      fact_check_information: null;
      fact_check_overall_rating: null;
      gating_info: null;
      has_ranked_comments: boolean;
      id: string;
      is_ad: boolean;
      is_video: boolean;
      location: null;
      media_overlay_info: null;
      media_preview: null;
      owner: {
        id: string;
        is_verified: boolean;
        profile_pic_url: string;
        username: string;
        blocked_by_viewer: boolean;
      };
      sensitivity_friction_info: null;
      sharing_friction_info: {
        should_have_sharing_friction: boolean;
        bloks_app_url: null;
      };
      shortcode: string;
      taken_at_timestamp: DOMTimeStamp;
      tracking_token: string;
      viewer_can_reshare: boolean;
      viewer_has_liked: boolean;
      viewer_has_saved: boolean;
      viewer_has_saved_to_collection: boolean;
      viewer_in_photo_of_you: boolean;
    };
  };
}

export interface IPostEdgeMediaPreviewComment {
  node: {
    created_at: DOMTimeStamp;
    did_report_as_spam: boolean;
    edge_liked_by: {
      count: number;
    };
    id: string;
    is_restricted_pending: boolean;
    owner: {
      id: string;
      is_verified: boolean;
      profile_pic_url: string;
      username: string;
    };
  };
}

export interface IPostEdgeMediaPreviewLike {
  node: {
    id: string;
    profile_pic_url: string;
    username: string;
  };
}

export interface IPostEdgeMediaToCaption {
  node: {
    text: string;
  };
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

export interface IPostResult {
  post: IPostContent['graphql']['shortcode_media'];
  ok: boolean;
}
