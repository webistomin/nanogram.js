import xhrmock from 'xhr-mock';
import {
  TAG_PAGE_INVALID_CONTENT,
  TAG_PAGE_RESPONSE,
  TAG_PAGE_RESPONSE_EMPTY,
  TAG_PAGE_VALID_CONTENT,
} from '../__mocks__/get-media-by-tag.mock';
import { getMediaByTag } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';

describe('[nanogram.js] - core', () => {
  describe('getMediaByTag method', () => {
    const TAG = 'test';
    const URL = `https://www.instagram.com/explore/tags/${TAG}`;

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
        return res.status(200).body(JSON.stringify(TAG_PAGE_RESPONSE));
      });

      await getMediaByTag(TAG);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(TAG_PAGE_RESPONSE),
      });

      const result = await getMediaByTag(TAG);
      expect(result).toEqual(TAG_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify(TAG_PAGE_RESPONSE_EMPTY),
      });

      const result = await getMediaByTag(TAG);
      expect(result).toEqual(TAG_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: JSON.stringify({}),
      });

      try {
        await getMediaByTag(TAG);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
