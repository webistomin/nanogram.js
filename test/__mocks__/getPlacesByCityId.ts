import { IPlacesResponse, IPlacesResult } from '../../src/types/places-page';

export const PLACES_PAGE_RESPONSE: IPlacesResponse = {
  entry_data: {
    LocationsDirectoryPage: [
      {
        city_directory_page: false,
        city_info: {
          id: '',
          name: '',
          slug: '',
        },
        country_info: {
          id: '',
          name: '',
          slug: '',
        },
        location_list: [
          {
            id: '',
            name: '',
            slug: '',
          },
        ],
        next_page: 0,
        logging_page_id: '',
      },
    ],
  },
};

export const PLACES_PAGE_VALID_CONTENT: IPlacesResult = {
  place: {
    city_info: {
      id: '',
      name: '',
      slug: '',
    },
    country_info: {
      id: '',
      name: '',
      slug: '',
    },
    location_list: [
      {
        id: '',
        name: '',
        slug: '',
      },
    ],
  },
  ok: true,
};

export const PLACES_PAGE_INVALID_CONTENT: IPlacesResult = {
  place: {
    country_info: null,
    city_info: null,
    location_list: null,
  },
  ok: false,
};
