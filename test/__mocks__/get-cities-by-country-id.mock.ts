import { ICitiesResponse, ICitiesResult } from '../../src/types/cities-page';

export const CITIES_PAGE_RESPONSE: ICitiesResponse = {
  entry_data: {
    LocationsDirectoryPage: [
      {
        country_directory_page: true,
        country_info: {
          id: '',
          name: '',
          slug: '',
        },
        city_list: [
          {
            id: 'id',
            name: 'Midtown East',
            slug: 'midtown-east-united-states',
          },
        ],
        next_page: 0,
        logging_page_id: '',
      },
    ],
  },
};

export const CITIES_PAGE_RESPONSE_EMPTY: unknown = {
  entry_data: {
    LocationsDirectoryPage: [],
  },
};

export const CITIES_PAGE_VALID_CONTENT: ICitiesResult = {
  country_info: {
    id: '',
    name: '',
    slug: '',
  },
  city_list: [
    {
      id: 'id',
      name: 'Midtown East',
      slug: 'midtown-east-united-states',
    },
  ],
  ok: true,
};

export const CITIES_PAGE_INVALID_CONTENT: ICitiesResult = {
  country_info: null,
  city_list: null,
  ok: true,
};
