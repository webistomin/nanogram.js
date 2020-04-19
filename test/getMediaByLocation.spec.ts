import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import {
  LOCATION_PAGE_RESPONSE,
  LOCATION_PAGE_INVALID_CONTENT,
  LOCATION_PAGE_VALID_CONTENT,
} from './__mocks__/getMediaByLocation';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getMediaByLocation method', () => {
    let lib: Nanogram = null;
    const LOCATION_ID = 6264386;
    const PLACE_NAME = 'highbridge-park';
    const URL = `https://www.instagram.com/explore/locations/${LOCATION_ID}/${PLACE_NAME}`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByLocation(LOCATION_ID, PLACE_NAME);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(LOCATION_PAGE_RESPONSE));
      await lib.getMediaByLocation(LOCATION_ID, PLACE_NAME).then((res) => {
        expect(res).toEqual(LOCATION_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByLocation(LOCATION_ID, PLACE_NAME).then((res) => {
        expect(res).toEqual(LOCATION_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByLocation(undefined as number, undefined as string).then((res) => {
        expect(res).toEqual(LOCATION_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByLocation(undefined as number, undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
