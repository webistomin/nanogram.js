import xhrmock from 'xhr-mock';
import {
  PlACE_PAGE_INVALID_CONTENT,
  PLACE_PAGE_RESPONSE,
  PLACE_PAGE_RESPONSE_EMPTY,
  PlACE_PAGE_VALID_CONTENT,
} from '../__mocks__/get-media-by-place-id.mock';
import { getMediaByPlaceId } from '../../src';
import { NETWORK_BAN_MESSAGE } from '../../src/utils';
import { buildHTML } from '../helpers/build-html';

describe('[nanogram.js] - core', () => {
  describe('getPlacesByCityId method', () => {
    const PLACE_ID = 2999512;
    const URL = `https://www.instagram.com/explore/locations/${PLACE_ID}/`;

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
        return res.status(200).body(buildHTML(JSON.stringify(PLACE_PAGE_RESPONSE)));
      });

      await getMediaByPlaceId(PLACE_ID);
    });

    it('return correct value if everything is OK', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(PLACE_PAGE_RESPONSE)),
      });

      const result = await getMediaByPlaceId(PLACE_ID);
      expect(result).toEqual(PlACE_PAGE_VALID_CONTENT);
    });

    it('return default value if response is empty', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify(PLACE_PAGE_RESPONSE_EMPTY)),
      });

      const result = await getMediaByPlaceId(PLACE_ID);
      expect(result).toEqual(PlACE_PAGE_INVALID_CONTENT);
    });

    it('throw error if has network ban', async () => {
      xhrmock.get(URL, {
        status: 200,
        body: buildHTML(JSON.stringify({})),
      });

      try {
        await getMediaByPlaceId(PLACE_ID);
      } catch (error) {
        expect(error).toEqual(new Error(NETWORK_BAN_MESSAGE));
      }
    });
  });
});
