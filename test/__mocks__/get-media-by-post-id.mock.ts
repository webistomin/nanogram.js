import { IPostResponse, IPostResult } from '../../src/types/post-page';

export const POST_PAGE_RESPONSE: IPostResponse = {
  entry_data: {
    PostPage: [
      {
        graphql: {
          shortcode_media: {
            __typename: '',
            id: '',
            shortcode: '',
            dimensions: {
              height: 0,
              width: 0,
            },
            sensitivity_friction_info: false,
            sharing_friction_info: {
              should_have_sharing_friction: true,
              bloks_app_url: null,
            },
            media_overlay_info: '',
            media_preview: '',
            display_url: '',
            display_resources: [],
            is_video: false,
            tracking_token: '',
            edge_media_to_caption: {},
            caption_is_edited: false,
            has_ranked_comments: false,
            comments_disabled: false,
            commenting_disabled_for_viewer: false,
            taken_at_timestamp: 0,
            edge_media_preview_like: {},
            edge_media_to_sponsor_user: {},
            location: null,
            viewer_has_liked: false,
            viewer_has_saved: false,
            viewer_has_saved_to_collection: false,
            viewer_in_photo_of_you: false,
            viewer_can_reshare: false,
            owner: {
              id: '',
              is_verified: false,
              profile_pic_url: '',
              username: '',
              blocked_by_viewer: false,
              followed_by_viewer: false,
              full_name: '',
              has_blocked_viewer: false,
              is_private: false,
              is_unpublished: false,
              requested_by_viewer: false,
              restricted_by_viewer: false,
              pass_tiering_recommendation: false,
              edge_owner_to_timeline_media: {
                count: 0,
              },
              edge_followed_by: {
                count: 0,
              },
            },
            is_ad: false,
            edge_web_media_to_related_media: {},
          },
        },
      },
    ],
  },
};

export const POST_PAGE_RESPONSE_EMPTY: unknown = {
  entry_data: {
    PostPage: [],
  },
};

export const POST_PAGE_VALID_CONTENT: IPostResult = {
  post: {
    __typename: '',
    id: '',
    shortcode: '',
    dimensions: {
      height: 0,
      width: 0,
    },
    sensitivity_friction_info: false,
    sharing_friction_info: {
      should_have_sharing_friction: true,
      bloks_app_url: null,
    },
    media_overlay_info: '',
    media_preview: '',
    display_url: '',
    display_resources: [],
    is_video: false,
    tracking_token: '',
    edge_media_to_caption: {},
    caption_is_edited: false,
    has_ranked_comments: false,
    comments_disabled: false,
    commenting_disabled_for_viewer: false,
    taken_at_timestamp: 0,
    edge_media_preview_like: {},
    edge_media_to_sponsor_user: {},
    location: null,
    viewer_has_liked: false,
    viewer_has_saved: false,
    viewer_has_saved_to_collection: false,
    viewer_in_photo_of_you: false,
    viewer_can_reshare: false,
    owner: {
      id: '',
      is_verified: false,
      profile_pic_url: '',
      username: '',
      blocked_by_viewer: false,
      followed_by_viewer: false,
      full_name: '',
      has_blocked_viewer: false,
      is_private: false,
      is_unpublished: false,
      requested_by_viewer: false,
      restricted_by_viewer: false,
      pass_tiering_recommendation: false,
      edge_owner_to_timeline_media: {
        count: 0,
      },
      edge_followed_by: {
        count: 0,
      },
    },
    is_ad: false,
    edge_web_media_to_related_media: {},
  },
  ok: true,
};

export const POST_PAGE_INVALID_CONTENT: IPostResult = {
  post: null,
  ok: true,
};
