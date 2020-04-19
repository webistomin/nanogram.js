import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import {
  PLACES_PAGE_RESPONSE,
  PLACES_PAGE_INVALID_CONTENT,
  PLACES_PAGE_VALID_CONTENT,
} from './__mocks__/getPlacesByCityId';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getPlacesByCityId method', () => {
    let lib: Nanogram = null;
    const CITY_ID = 'c2728325';
    const URL = `https://www.instagram.com/explore/locations/${CITY_ID}`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getPlacesByCityId(CITY_ID);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(PLACES_PAGE_RESPONSE));
      await lib.getPlacesByCityId(CITY_ID).then((res) => {
        expect(res).toEqual(PLACES_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getPlacesByCityId(CITY_ID).then((res) => {
        expect(res).toEqual(PLACES_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getPlacesByCityId(undefined as string).then((res) => {
        expect(res).toEqual(PLACES_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getPlacesByCityId(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
