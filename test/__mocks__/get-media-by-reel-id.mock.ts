import { IReelResponse, IReelResult } from '../../src/types/reel-page';

export const REEL_PAGE_RESPONSE: IReelResponse = {
  entry_data: {
    PostPage: [
      {
        graphql: {
          shortcode_media: {
            __typename: '',
            id: '',
            shortcode: '',
            dimensions: {
              height: 1500,
              width: 750,
            },
            gating_info: null,
            fact_check_overall_rating: null,
            fact_check_information: null,
            sensitivity_friction_info: null,
            sharing_friction_info: {
              should_have_sharing_friction: false,
              bloks_app_url: null,
            },
            media_overlay_info: null,
            media_preview: '',
            display_url: '',
            display_resources: [
              {
                src: '',
                config_width: 640,
                config_height: 1280,
              },
              {
                src: '',
                config_width: 750,
                config_height: 1500,
              },
              {
                src: '',
                config_width: 1080,
                config_height: 2160,
              },
            ],
            accessibility_caption: null,
            dash_info: {
              is_dash_eligible: false,
              video_dash_manifest: null,
              number_of_qualities: 0,
            },
            has_audio: true,
            video_url: '',
            video_view_count: 378982,
            video_play_count: 479637,
            is_video: true,
            tracking_token: '',
            edge_media_to_tagged_user: {
              edges: [],
            },
            edge_media_to_caption: {
              edges: [
                {
                  node: {
                    text: '',
                  },
                },
              ],
            },
            caption_is_edited: false,
            has_ranked_comments: false,
            edge_media_to_parent_comment: {
              count: 63,
              page_info: {
                has_next_page: true,
                end_cursor: '',
              },
              edges: [
                {
                  node: {
                    id: '',
                    text: '',
                    created_at: 123,
                    did_report_as_spam: false,
                    owner: {
                      id: '',
                      is_verified: false,
                      profile_pic_url: '',
                      username: '',
                    },
                    viewer_has_liked: false,
                    edge_liked_by: {
                      count: 0,
                    },
                    is_restricted_pending: false,
                    edge_threaded_comments: {
                      count: 0,
                      page_info: {
                        has_next_page: false,
                        end_cursor: null,
                      },
                      edges: [],
                    },
                  },
                },
              ],
            },
            edge_media_to_hoisted_comment: {
              edges: [],
            },
            edge_media_preview_comment: {
              count: 63,
              edges: [
                {
                  node: {
                    id: '',
                    text: '',
                    created_at: 1611468245,
                    did_report_as_spam: false,
                    owner: {
                      id: '',
                      is_verified: false,
                      profile_pic_url: '',
                      username: '',
                    },
                    viewer_has_liked: false,
                    edge_liked_by: {
                      count: 0,
                    },
                    is_restricted_pending: false,
                  },
                },
              ],
            },
            comments_disabled: false,
            commenting_disabled_for_viewer: false,
            taken_at_timestamp: 1611049635,
            edge_media_preview_like: {
              count: 36871,
              edges: [],
            },
            edge_media_to_sponsor_user: {
              edges: [],
            },
            location: null,
            viewer_has_liked: false,
            viewer_has_saved: false,
            viewer_has_saved_to_collection: false,
            viewer_in_photo_of_you: false,
            viewer_can_reshare: true,
            owner: {
              id: '',
              is_verified: false,
              profile_pic_url: '',
              username: '',
              blocked_by_viewer: false,
              restricted_by_viewer: null,
              followed_by_viewer: false,
              full_name: '',
              has_blocked_viewer: false,
              is_private: false,
              is_unpublished: false,
              requested_by_viewer: false,
              pass_tiering_recommendation: true,
              edge_owner_to_timeline_media: {
                count: 203,
              },
              edge_followed_by: {
                count: 94660,
              },
            },
            is_ad: false,
            edge_web_media_to_related_media: {
              edges: [],
            },
            encoding_status: null,
            is_published: true,
            product_type: '',
            title: '',
            video_duration: 17.8,
            thumbnail_src: '',
            clips_music_attribution_info: null,
            edge_related_profiles: {
              edges: [],
            },
          },
        },
      },
    ],
  },
};

export const REEL_PAGE_RESPONSE_EMPTY: unknown = {
  entry_data: {
    PostPage: [],
  },
};

export const REEL_PAGE_VALID_CONTENT: IReelResult = {
  reel: REEL_PAGE_RESPONSE.entry_data.PostPage[0].graphql.shortcode_media,
};

export const REEL_PAGE_INVALID_CONTENT: IReelResult = {
  reel: null,
};
