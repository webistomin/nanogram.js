import { IUserProfileResponse, IUserProfileResult } from '../../src/types/user-profile-page';

export const USER_PAGE_RESPONSE: IUserProfileResponse = {
  entry_data: {
    ProfilePage: [
      {
        logging_page_id: '',
        show_suggested_profiles: false,
        show_follow_dialog: false,
        toast_content_on_load: null,
        graphql: {
          user: {
            biography: '',
            blocked_by_viewer: false,
            restricted_by_viewer: null,
            country_block: false,
            external_url: '',
            external_url_linkshimmed: '',
            edge_followed_by: {
              count: 344415438,
            },
            followed_by_viewer: false,
            edge_follow: {
              count: 222,
            },
            follows_viewer: false,
            full_name: '',
            has_ar_effects: false,
            has_channel: false,
            has_blocked_viewer: false,
            highlight_reel_count: 20,
            has_requested_viewer: false,
            id: '',
            is_business_account: false,
            is_joined_recently: false,
            business_category_name: null,
            category_id: null,
            overall_category_name: null,
            is_private: false,
            is_verified: true,
            edge_mutual_followed_by: {
              count: 0,
              edges: [],
            },
            profile_pic_url: '',
            profile_pic_url_hd: '',
            requested_by_viewer: false,
            username: '',
            connected_fb_page: null,
            edge_related_profiles: {},
            edge_felix_video_timeline: {
              count: 222,
              page_info: {
                has_next_page: true,
                end_cursor: '',
              },
              edges: [
                {
                  node: {
                    __typename: '',
                    id: '',
                    shortcode: '',
                    dimensions: {
                      height: 1919,
                      width: 1080,
                    },
                    display_url: '',
                    gating_info: null,
                    fact_check_overall_rating: null,
                    fact_check_information: null,
                    media_preview: '',
                    owner: {
                      id: '',
                      username: '',
                    },
                    is_video: true,
                    accessibility_caption: null,
                    edge_media_to_tagged_user: {},
                    edge_media_to_caption: {
                      edges: [
                        {
                          node: {
                            text: '',
                          },
                        },
                      ],
                    },
                    edge_media_to_comment: {
                      count: 6817,
                    },
                    comments_disabled: false,
                    taken_at_timestamp: 1587060297,
                    edge_liked_by: {
                      count: 233960,
                    },
                    edge_media_preview_like: {
                      count: 233960,
                    },
                    location: null,
                    thumbnail_src: '',
                    thumbnail_resources: [
                      {
                        src: '',
                        config_width: 150,
                        config_height: 266,
                      },
                      {
                        src: '',
                        config_width: 240,
                        config_height: 426,
                      },
                      {
                        src: '',
                        config_width: 320,
                        config_height: 568,
                      },
                      {
                        src: '',
                        config_width: 480,
                        config_height: 853,
                      },
                      {
                        src: '',
                        config_width: 640,
                        config_height: 1137,
                      },
                    ],
                    felix_profile_grid_crop: {
                      crop_left: 0,
                      crop_right: 1,
                      crop_top: 0.1915535445,
                      crop_bottom: 0.754147813,
                    },
                    encoding_status: null,
                    is_published: true,
                    product_type: 'igtv',
                    title: 'Attention to Intention with @yarashahidi 💕 ⁣',
                    video_duration: 182.698,
                    video_view_count: 3063701,
                  },
                },
              ],
            },
            edge_owner_to_timeline_media: {
              count: 6309,
              page_info: {
                has_next_page: true,
                end_cursor: '',
              },
              edges: [
                {
                  node: {
                    __typename: '',
                    id: '',
                    shortcode: '',
                    dimensions: {
                      height: 823,
                      width: 1080,
                    },
                    display_url: '',
                    gating_info: null,
                    fact_check_overall_rating: null,
                    fact_check_information: null,
                    media_preview: '',
                    owner: {
                      id: '',
                      username: '',
                    },
                    is_video: false,
                    accessibility_caption: '',
                    edge_media_to_tagged_user: {},
                    edge_media_to_caption: {
                      edges: [
                        {
                          node: {
                            text: '',
                          },
                        },
                      ],
                    },
                    edge_media_to_comment: {
                      count: 21335,
                    },
                    comments_disabled: false,
                    taken_at_timestamp: 1587158060,
                    edge_liked_by: {
                      count: 1543694,
                    },
                    edge_media_preview_like: {
                      count: 1543694,
                    },
                    location: {
                      id: '',
                      has_public_page: true,
                      name: '',
                      slug: '',
                    },
                    thumbnail_src: '',
                    thumbnail_resources: [
                      {
                        src: '',
                        config_width: 150,
                        config_height: 150,
                      },
                      {
                        src: '',
                        config_width: 240,
                        config_height: 240,
                      },
                      {
                        src: '',
                        config_width: 320,
                        config_height: 320,
                      },
                      {
                        src: '',
                        config_width: 480,
                        config_height: 480,
                      },
                      {
                        src: '',
                        config_width: 640,
                        config_height: 640,
                      },
                    ],
                  },
                },
              ],
            },
            edge_saved_media: {
              count: 0,
              page_info: {
                has_next_page: false,
                end_cursor: null,
              },
              edges: [],
            },
            edge_media_collections: {
              count: 0,
              page_info: {
                has_next_page: false,
                end_cursor: null,
              },
              edges: [],
            },
          },
        },
      },
    ],
  },
};

export const USER_PAGE_VALID_CONTENT: IUserProfileResult = {
  profile: {
    biography: '',
    blocked_by_viewer: false,
    restricted_by_viewer: null,
    country_block: false,
    external_url: '',
    external_url_linkshimmed: '',
    edge_followed_by: {
      count: 344415438,
    },
    followed_by_viewer: false,
    edge_follow: {
      count: 222,
    },
    follows_viewer: false,
    full_name: '',
    has_ar_effects: false,
    has_channel: false,
    has_blocked_viewer: false,
    highlight_reel_count: 20,
    has_requested_viewer: false,
    id: '',
    is_business_account: false,
    is_joined_recently: false,
    business_category_name: null,
    category_id: null,
    overall_category_name: null,
    is_private: false,
    is_verified: true,
    edge_mutual_followed_by: {
      count: 0,
      edges: [],
    },
    profile_pic_url: '',
    profile_pic_url_hd: '',
    requested_by_viewer: false,
    username: '',
    connected_fb_page: null,
    edge_related_profiles: {},
    edge_felix_video_timeline: {
      count: 222,
      page_info: {
        has_next_page: true,
        end_cursor: '',
      },
      edges: [
        {
          node: {
            __typename: '',
            id: '',
            shortcode: '',
            dimensions: {
              height: 1919,
              width: 1080,
            },
            display_url: '',
            gating_info: null,
            fact_check_overall_rating: null,
            fact_check_information: null,
            media_preview: '',
            owner: {
              id: '',
              username: '',
            },
            is_video: true,
            accessibility_caption: null,
            edge_media_to_tagged_user: {},
            edge_media_to_caption: {
              edges: [
                {
                  node: {
                    text: '',
                  },
                },
              ],
            },
            edge_media_to_comment: {
              count: 6817,
            },
            comments_disabled: false,
            taken_at_timestamp: 1587060297,
            edge_liked_by: {
              count: 233960,
            },
            edge_media_preview_like: {
              count: 233960,
            },
            location: null,
            thumbnail_src: '',
            thumbnail_resources: [
              {
                src: '',
                config_width: 150,
                config_height: 266,
              },
              {
                src: '',
                config_width: 240,
                config_height: 426,
              },
              {
                src: '',
                config_width: 320,
                config_height: 568,
              },
              {
                src: '',
                config_width: 480,
                config_height: 853,
              },
              {
                src: '',
                config_width: 640,
                config_height: 1137,
              },
            ],
            felix_profile_grid_crop: {
              crop_left: 0,
              crop_right: 1,
              crop_top: 0.1915535445,
              crop_bottom: 0.754147813,
            },
            encoding_status: null,
            is_published: true,
            product_type: 'igtv',
            title: 'Attention to Intention with @yarashahidi 💕 ⁣',
            video_duration: 182.698,
            video_view_count: 3063701,
          },
        },
      ],
    },
    edge_owner_to_timeline_media: {
      count: 6309,
      page_info: {
        has_next_page: true,
        end_cursor: '',
      },
      edges: [
        {
          node: {
            __typename: '',
            id: '',
            shortcode: '',
            dimensions: {
              height: 823,
              width: 1080,
            },
            display_url: '',
            gating_info: null,
            fact_check_overall_rating: null,
            fact_check_information: null,
            media_preview: '',
            owner: {
              id: '',
              username: '',
            },
            is_video: false,
            accessibility_caption: '',
            edge_media_to_tagged_user: {},
            edge_media_to_caption: {
              edges: [
                {
                  node: {
                    text: '',
                  },
                },
              ],
            },
            edge_media_to_comment: {
              count: 21335,
            },
            comments_disabled: false,
            taken_at_timestamp: 1587158060,
            edge_liked_by: {
              count: 1543694,
            },
            edge_media_preview_like: {
              count: 1543694,
            },
            location: {
              id: '',
              has_public_page: true,
              name: '',
              slug: '',
            },
            thumbnail_src: '',
            thumbnail_resources: [
              {
                src: '',
                config_width: 150,
                config_height: 150,
              },
              {
                src: '',
                config_width: 240,
                config_height: 240,
              },
              {
                src: '',
                config_width: 320,
                config_height: 320,
              },
              {
                src: '',
                config_width: 480,
                config_height: 480,
              },
              {
                src: '',
                config_width: 640,
                config_height: 640,
              },
            ],
          },
        },
      ],
    },
    edge_saved_media: {
      count: 0,
      page_info: {
        has_next_page: false,
        end_cursor: null,
      },
      edges: [],
    },
    edge_media_collections: {
      count: 0,
      page_info: {
        has_next_page: false,
        end_cursor: null,
      },
      edges: [],
    },
  },
  ok: true,
};

export const USER_PAGE_INVALID_CONTENT: IUserProfileResult = {
  profile: null,
  ok: false,
};
