import { ISearchResult } from '../../src/types/search-page';

export const SEARCH_PAGE_VALID_CONTENT: ISearchResult = {
  media: {
    users: [
      {
        position: 38,
        user: {
          pk: '22215111457',
          username: 'hametaro111',
          full_name: '',
          is_private: false,
          profile_pic_url:
            'https://instagram.frix2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92722570_610007222917498_513398997331738624_n.jpg?_nc_ht=instagram.frix2-1.fna.fbcdn.net&_nc_ohc=g1p6pnmcFhcAX-yQEqy&oh=b4f0cb30e518dbc7335e850e3434f7d4&oe=5EC3FBFF',
          profile_pic_id: '2283594739873483786_22215111457',
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
          name: '111',
          id: 17841562552110860,
          media_count: 641881,
          use_default_avatar: false,
          profile_pic_url:
            'https://www.instagram.com/static/images/hashtag/search-hashtag-default-avatar.png/1d8417c9a4f5.png',
          search_result_subtitle: '641k публикаций',
        },
      },
    ],
    places: [
      {
        place: {
          location: {
            pk: '298237556879648',
            name: '111',
            address: '',
            city: '',
            short_name: '111',
            lng: 36.6582442,
            lat: -1.3605156,
            external_source: 'facebook_places',
            facebook_places_id: 298237556879648,
          },
          title: '111',
          subtitle: '',
          media_bundles: [],
          slug: '111',
        },
        position: 1,
      },
    ],
  },
  ok: true,
};

export const SEARCH_PAGE_INVALID_CONTENT: ISearchResult = {
  media: {
    users: null,
    hashtags: null,
    places: null,
  },
  ok: false,
};
