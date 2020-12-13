import { ITagsResponse, ITagsResult } from '../../src/types/tags-page';

export const TAG_PAGE_RESPONSE: ITagsResponse = {
  entry_data: {
    TagPage: [
      {
        graphql: {
          hashtag: {
            id: '',
            name: '',
            allow_following: false,
            description: '',
            is_following: false,
            is_top_media_only: false,
            profile_pic_url: '',
            edge_hashtag_to_media: {
              count: 4131750,
              page_info: {
                has_next_page: true,
                end_cursor: '',
              },
              edges: [
                {
                  node: {
                    comments_disabled: false,
                    __typename: '',
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
                      count: 0,
                    },
                    taken_at_timestamp: 1,
                    dimensions: {
                      height: 1350,
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
                    accessibility_caption: '',
                  },
                },
              ],
            },
            edge_hashtag_to_top_posts: {
              edges: [
                {
                  node: {
                    __typename: '',
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
                      count: 54,
                    },
                    taken_at_timestamp: 1587224196,
                    dimensions: {
                      height: 1350,
                      width: 1080,
                    },
                    display_url: '',
                    edge_liked_by: {
                      count: 1085,
                    },
                    edge_media_preview_like: {
                      count: 1085,
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
                    accessibility_caption: '',
                  },
                },
              ],
            },
            edge_hashtag_to_content_advisory: {
              count: 0,
              edges: [],
            },
            edge_hashtag_to_related_tags: {
              edges: [
                {
                  node: {
                    name: 'course',
                  },
                },
                {
                  node: {
                    name: 'testing',
                  },
                },
                {
                  node: {
                    name: 'tests',
                  },
                },
                {
                  node: {
                    name: 'biologie',
                  },
                },
                {
                  node: {
                    name: 'probability',
                  },
                },
                {
                  node: {
                    name: 'etudiants',
                  },
                },
                {
                  node: {
                    name: 'sciences',
                  },
                },
                {
                  node: {
                    name: 'preparation',
                  },
                },
                {
                  node: {
                    name: 'eylemmath',
                  },
                },
                {
                  node: {
                    name: 'ecole',
                  },
                },
              ],
            },
            edge_hashtag_to_null_state: {
              edges: [],
            },
          },
        },
      },
    ],
  },
};

export const TAG_PAGE_VALID_CONTENT: ITagsResult = {
  tag: {
    id: '',
    name: '',
    allow_following: false,
    description: '',
    is_following: false,
    is_top_media_only: false,
    profile_pic_url: '',
    edge_hashtag_to_media: {
      count: 4131750,
      page_info: {
        has_next_page: true,
        end_cursor: '',
      },
      edges: [
        {
          node: {
            comments_disabled: false,
            __typename: '',
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
              count: 0,
            },
            taken_at_timestamp: 1,
            dimensions: {
              height: 1350,
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
            accessibility_caption: '',
          },
        },
      ],
    },
    edge_hashtag_to_top_posts: {
      edges: [
        {
          node: {
            __typename: '',
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
              count: 54,
            },
            taken_at_timestamp: 1587224196,
            dimensions: {
              height: 1350,
              width: 1080,
            },
            display_url: '',
            edge_liked_by: {
              count: 1085,
            },
            edge_media_preview_like: {
              count: 1085,
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
            accessibility_caption: '',
          },
        },
      ],
    },
    edge_hashtag_to_content_advisory: {
      count: 0,
      edges: [],
    },
    edge_hashtag_to_related_tags: {
      edges: [
        {
          node: {
            name: 'course',
          },
        },
        {
          node: {
            name: 'testing',
          },
        },
        {
          node: {
            name: 'tests',
          },
        },
        {
          node: {
            name: 'biologie',
          },
        },
        {
          node: {
            name: 'probability',
          },
        },
        {
          node: {
            name: 'etudiants',
          },
        },
        {
          node: {
            name: 'sciences',
          },
        },
        {
          node: {
            name: 'preparation',
          },
        },
        {
          node: {
            name: 'eylemmath',
          },
        },
        {
          node: {
            name: 'ecole',
          },
        },
      ],
    },
    edge_hashtag_to_null_state: {
      edges: [],
    },
  },
  ok: true,
};

export const TAG_PAGE_INVALID_CONTENT: ITagsResult = {
  tag: null,
  ok: false,
};
