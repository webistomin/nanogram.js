import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import { SEARCH_PAGE_INVALID_CONTENT, SEARCH_PAGE_VALID_CONTENT } from './__mocks__/getMediaBySearchQuery';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getMediaBySearchQuery method', () => {
    let lib: Nanogram = null;
    const SEARCH_QUERY = '111';
    const URL = `https://www.instagram.com/web/search/topsearch/?context=blended&query=${SEARCH_QUERY}&include_reel=true`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaBySearchQuery(SEARCH_QUERY);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(SEARCH_PAGE_VALID_CONTENT.media));
      await lib.getMediaBySearchQuery(SEARCH_QUERY).then((res) => {
        expect(res).toEqual(SEARCH_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaBySearchQuery(SEARCH_QUERY).then((res) => {
        expect(res).toEqual(SEARCH_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaBySearchQuery(undefined as string).then((res) => {
        expect(res).toEqual(SEARCH_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaBySearchQuery(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
