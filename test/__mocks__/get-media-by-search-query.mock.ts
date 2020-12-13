import { ISearchResult } from '../../src/types/search-page';

export const SEARCH_PAGE_VALID_CONTENT: ISearchResult = {
  media: {
    users: [
      {
        position: 38,
        user: {
          pk: '',
          username: '',
          full_name: '',
          is_private: false,
          profile_pic_url: '',
          profile_pic_id: '',
          is_verified: false,
          has_anonymous_profile_picture: false,
          mutual_followers_count: 0,
          latest_reel_media: 0,
        },
      },
    ],
    hashtags: [
      {
        position: 0,
        hashtag: {
          name: '',
          id: 1,
          media_count: 1,
          use_default_avatar: false,
          profile_pic_url: '',
          search_result_subtitle: '',
        },
      },
    ],
    places: [
      {
        place: {
          location: {
            pk: '',
            name: '',
            address: '',
            city: '',
            short_name: '',
            lng: 1,
            lat: 1,
            external_source: '',
            facebook_places_id: 1,
          },
          title: '',
          subtitle: '',
          media_bundles: [],
          slug: '',
        },
        position: 1,
      },
    ],
  },
};

export const SEARCH_PAGE_EMPTY_CONTENT: unknown = {
  media: {},
};

export const SEARCH_PAGE_INVALID_CONTENT: ISearchResult = {
  media: {
    users: null,
    hashtags: null,
    places: null,
  },
};
