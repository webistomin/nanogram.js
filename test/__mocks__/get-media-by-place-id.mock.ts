import { IPlaceResponse, IPlaceResult } from '../../src/types/place-page';

export const PLACE_PAGE_RESPONSE: IPlaceResponse = {
  entry_data: {
    LocationsPage: [
      {
        graphql: {
          location: {
            id: '',
            name: '',
            has_public_page: true,
            lat: 1,
            lng: 1,
            slug: '',
            blurb: '',
            website: '',
            phone: '',
            primary_alias_on_fb: '',
            address_json: '',
            profile_pic_url: '',
            edge_location_to_media: {
              count: 1865236,
              page_info: {
                has_next_page: true,
                end_cursor: '',
              },
              edges: [
                {
                  node: {
                    comments_disabled: false,
                    id: '',
                    edge_media_to_caption: {
                      edges: [],
                    },
                    shortcode: '',
                    edge_media_to_comment: {
                      count: 0,
                    },
                    taken_at_timestamp: 1587311173,
                    dimensions: {
                      height: 810,
                      width: 1080,
                    },
                    display_url: '',
                    edge_liked_by: {
                      count: 0,
                    },
                    edge_media_preview_like: {
                      count: 0,
                    },
                    owner: {
                      id: '',
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
                    is_video: false,
                  },
                },
              ],
            },
            edge_location_to_top_posts: {
              count: 48,
              page_info: {
                has_next_page: false,
                end_cursor: null,
              },
              edges: [
                {
                  node: {
                    id: '',
                    edge_media_to_caption: {
                      edges: [
                        {
                          node: {
                            text: '',
                          },
                        },
                      ],
                    },
                    shortcode: '',
                    edge_media_to_comment: {
                      count: 101,
                    },
                    taken_at_timestamp: 1585622020,
                    dimensions: {
                      height: 1350,
                      width: 1080,
                    },
                    display_url: '',
                    edge_liked_by: {
                      count: 19606,
                    },
                    edge_media_preview_like: {
                      count: 19606,
                    },
                    owner: {
                      id: '',
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
                    is_video: false,
                  },
                },
              ],
            },
            directory: {
              country: {
                id: '',
                name: '',
                slug: '',
              },
              city: {
                id: '',
                name: '',
                slug: '',
              },
            },
          },
        },
        logging_page_id: '',
        photos_and_videos_header: false,
        recent_pictures_and_videos_subheader: false,
        top_images_and_videos_subheader: false,
      },
    ],
  },
};

export const PLACE_PAGE_RESPONSE_EMPTY: unknown = {
  entry_data: {
    LocationsPage: [],
  },
};

export const PlACE_PAGE_VALID_CONTENT: IPlaceResult = {
  location: {
    id: '',
    name: '',
    has_public_page: true,
    lat: 1,
    lng: 1,
    slug: '',
    blurb: '',
    website: '',
    phone: '',
    primary_alias_on_fb: '',
    address_json: '',
    profile_pic_url: '',
    edge_location_to_media: {
      count: 1865236,
      page_info: {
        has_next_page: true,
        end_cursor: '',
      },
      edges: [
        {
          node: {
            comments_disabled: false,
            id: '',
            edge_media_to_caption: {
              edges: [],
            },
            shortcode: '',
            edge_media_to_comment: {
              count: 0,
            },
            taken_at_timestamp: 1587311173,
            dimensions: {
              height: 810,
              width: 1080,
            },
            display_url: '',
            edge_liked_by: {
              count: 0,
            },
            edge_media_preview_like: {
              count: 0,
            },
            owner: {
              id: '',
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
            is_video: false,
          },
        },
      ],
    },
    edge_location_to_top_posts: {
      count: 48,
      page_info: {
        has_next_page: false,
        end_cursor: null,
      },
      edges: [
        {
          node: {
            id: '',
            edge_media_to_caption: {
              edges: [
                {
                  node: {
                    text: '',
                  },
                },
              ],
            },
            shortcode: '',
            edge_media_to_comment: {
              count: 101,
            },
            taken_at_timestamp: 1585622020,
            dimensions: {
              height: 1350,
              width: 1080,
            },
            display_url: '',
            edge_liked_by: {
              count: 19606,
            },
            edge_media_preview_like: {
              count: 19606,
            },
            owner: {
              id: '',
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
            is_video: false,
          },
        },
      ],
    },
    directory: {
      country: {
        id: '',
        name: '',
        slug: '',
      },
      city: {
        id: '',
        name: '',
        slug: '',
      },
    },
  },
  ok: true,
};

export const PlACE_PAGE_INVALID_CONTENT: IPlaceResult = {
  location: null,
  ok: true,
};
