import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import { TAG_PAGE_RESPONSE, TAG_PAGE_VALID_CONTENT, TAG_PAGE_INVALID_CONTENT } from './__mocks__/getMediaByTag';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getMediaByTag method', () => {
    let lib: Nanogram = null;
    const TAG = 'test';
    const URL = `https://www.instagram.com/explore/tags/${TAG}`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByTag(TAG);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(TAG_PAGE_RESPONSE));
      await lib.getMediaByTag(TAG).then((res) => {
        expect(res).toEqual(TAG_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByTag(TAG).then((res) => {
        expect(res).toEqual(TAG_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByTag(undefined as string).then((res) => {
        expect(res).toEqual(TAG_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByTag(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
