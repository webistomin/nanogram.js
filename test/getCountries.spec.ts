import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import {
  COUNTRIES_PAGE_INVALID_CONTENT,
  COUNTRIES_PAGE_RESPONSE,
  COUNTRIES_PAGE_VALID_CONTENT,
} from './__mocks__/getCountries';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getCountries method', () => {
    let lib: Nanogram = null;
    const URL = `https://www.instagram.com/explore/locations/`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getCountries();
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(COUNTRIES_PAGE_RESPONSE));
      await lib.getCountries().then((res) => {
        expect(res).toEqual(COUNTRIES_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getCountries().then((res) => {
        expect(res).toEqual(COUNTRIES_PAGE_INVALID_CONTENT);
      });
    });
  });
});
