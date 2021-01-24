import xhrmock from 'xhr-mock';
import {
  REEL_PAGE_INVALID_CONTENT,
  REEL_PAGE_RESPONSE,
  REEL_PAGE_RESPONSE_EMPTY,
  REEL_PAGE_VALID_CONTENT,
} from '../__mocks__/get-media-by-reel-id.mock';
import { getMediaByReelId } from '../../src/nanogram';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';
import { buildHTML } from '../helpers/build-html';

describe('[nanogram.js] - core', () => {
  describe('getMediaByReelId method', () => {
    const REEL_ID = 'CKONdDkJaPU';
    const URL = `https://www.instagram.com/reel/${REEL_ID}/`;

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
        return res.status(200).body(buildHTML(JSON.stringify(REEL_PAGE_RESPONSE)));
      });

      await getMediaByReelId(REEL_ID);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(REEL_PAGE_RESPONSE)),
      });

      const result = await getMediaByReelId(REEL_ID);
      expect(result).toEqual(REEL_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(REEL_PAGE_RESPONSE_EMPTY)),
      });

      const result = await getMediaByReelId(REEL_ID);
      expect(result).toEqual(REEL_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify({})),
      });

      try {
        await getMediaByReelId(REEL_ID);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
