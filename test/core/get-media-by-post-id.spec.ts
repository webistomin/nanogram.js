import xhrmock from 'xhr-mock';
import {
  POST_PAGE_INVALID_CONTENT,
  POST_PAGE_RESPONSE,
  POST_PAGE_RESPONSE_EMPTY,
  POST_PAGE_VALID_CONTENT,
} from '../__mocks__/get-media-by-post-id.mock';
import { getMediaByPostId } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';

describe('[nanogram.js] - core', () => {
  describe('getMediaByPostId method', () => {
    const POST_ID = 'CIrIDMtDwn4';
    const URL = `https://www.instagram.com/p/${POST_ID}`;

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
        return res.status(200).body(JSON.stringify(POST_PAGE_RESPONSE));
      });

      await getMediaByPostId(POST_ID);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(POST_PAGE_RESPONSE),
      });

      const result = await getMediaByPostId(POST_ID);
      expect(result).toEqual(POST_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(POST_PAGE_RESPONSE_EMPTY),
      });

      const result = await getMediaByPostId(POST_ID);
      expect(result).toEqual(POST_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      try {
        await getMediaByPostId(POST_ID);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
