import { ILocationDirectoryResponse, ILocationDirectoryResult } from '../../src/types/location-directory-page';

export const COUNTRIES_PAGE_RESPONSE: ILocationDirectoryResponse = {
  entry_data: {
    LocationsDirectoryPage: [
      {
        country_list: [
          {
            id: 'US',
            name: 'United States',
            slug: 'united-states',
          },
        ],
        next_page: 0,
        logging_page_id: '',
      },
    ],
  },
};

export const COUNTRIES_PAGE_RESPONSE_EMPTY: unknown = {
  entry_data: {
    LocationsDirectoryPage: [],
  },
};

export const COUNTRIES_PAGE_VALID_CONTENT: ILocationDirectoryResult = {
  country_list: [
    {
      id: 'US',
      name: 'United States',
      slug: 'united-states',
    },
  ],
};

export const COUNTRIES_PAGE_INVALID_CONTENT: ILocationDirectoryResult = {
  country_list: null,
};
