import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import {
  CITIES_PAGE_RESPONSE,
  CITIES_PAGE_INVALID_CONTENT,
  CITIES_PAGE_VALID_CONTENT,
} from './__mocks__/getCitiesByCountryId';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getCitiesByCountryId method', () => {
    let lib: Nanogram = null;
    const COUNTRY_ID = 'US';
    const URL = `https://www.instagram.com/explore/locations/${COUNTRY_ID}`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getCitiesByCountryId(COUNTRY_ID);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(CITIES_PAGE_RESPONSE));
      await lib.getCitiesByCountryId(COUNTRY_ID).then((res) => {
        expect(res).toEqual(CITIES_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getCitiesByCountryId(COUNTRY_ID).then((res) => {
        expect(res).toEqual(CITIES_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getCitiesByCountryId(undefined as string).then((res) => {
        expect(res).toEqual(CITIES_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getCitiesByCountryId(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
