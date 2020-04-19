import Nanogram from '../src/nanogram';
import fetchMock from 'jest-fetch-mock';
import { USER_PAGE_INVALID_CONTENT, USER_PAGE_VALID_CONTENT, USER_PAGE_RESPONSE } from './__mocks__/getMediaByUsername';
fetchMock.enableMocks();

describe('Nanogram library', () => {
  describe('getMediaByUsername method', () => {
    let lib: Nanogram = null;
    const USERNAME = 'instagram';
    const URL = `https://www.instagram.com/${USERNAME}`;

    beforeEach(() => {
      fetchMock.resetMocks();
      lib = new Nanogram();
    });

    it('fetch correct URL', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByUsername(USERNAME);
      expect(fetchMock.mock.calls[0][0]).toEqual(URL);
    });

    it('return correct value if everything is correct', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(USER_PAGE_RESPONSE));
      await lib.getMediaByUsername(USERNAME).then((res) => {
        expect(res).toEqual(USER_PAGE_VALID_CONTENT);
      });
    });

    it('return default value if API returns nothing', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByUsername(USERNAME).then((res) => {
        expect(res).toEqual(USER_PAGE_INVALID_CONTENT);
      });
    });

    it('return default value if search query is invalid', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      await lib.getMediaByUsername(undefined as string).then((res) => {
        expect(res).toEqual(USER_PAGE_INVALID_CONTENT);
      });
    });

    it('print error to console if argument is not provided', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      await lib.getMediaByUsername(undefined as string);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
