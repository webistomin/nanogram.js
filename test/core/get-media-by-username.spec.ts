import xhrmock from 'xhr-mock';
import {
  USER_PAGE_VALID_CONTENT,
  USER_PAGE_RESPONSE,
  USER_PAGE_RESPONSE_EMPTY,
  USER_PAGE_INVALID_CONTENT,
} from '../__mocks__/get-media-by-username.mock';
import { getMediaByUsername } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';

describe('[nanogram.js] - core', () => {
  describe('getMediaByUsername method', () => {
    const USERNAME = 'instagram';
    const URL = `https://www.instagram.com/${USERNAME}`;

    beforeEach(() => {
      xhrmock.setup();
    });

    afterEach(() => {
      xhrmock.teardown();
    });

    it('fetch correct URL', async () => {
      expect.assertions(1);

      xhrmock.get(URL, (req, res) => {
        expect(req.url().toString()).toEqual(URL);
        return res.status(200).body(JSON.stringify(USER_PAGE_RESPONSE));
      });

      await getMediaByUsername(USERNAME);
    });

    it('return correct value if everything is correct', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(USER_PAGE_RESPONSE),
      });

      const result = await getMediaByUsername(USERNAME);
      expect(result).toEqual(USER_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(USER_PAGE_RESPONSE_EMPTY),
      });

      const result = await getMediaByUsername(USERNAME);
      expect(result).toEqual(USER_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      try {
        await getMediaByUsername(USERNAME);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
